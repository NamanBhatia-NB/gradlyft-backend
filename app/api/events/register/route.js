import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../../utils/db";

export async function POST(req) {
  // Step 1: Read token from cookie header
  const cookieHeader = req.headers.get("cookie") || "";
  const parsedCookies = parse(cookieHeader);
  const tokenRaw = parsedCookies["gradlyft_token"];
  if (!tokenRaw) return new Response("Unauthorized", { status: 401 });

  // Step 2: Decode and validate token
  let token;
  try {
    token = jwt.verify(tokenRaw, process.env.NEXTAUTH_SECRET);
  } catch {
    return new Response("Invalid token", { status: 403 });
  }
  console.log(token)

  // Step 3: Ensure student role
  if (token.role !== "STUDENT") return new Response("Forbidden", { status: 403 });

  // Step 4: Get student profile
  const student = await prisma.studentProfile.findUnique({
    where: { userId: token.id }
  });
  if (!student) return new Response("Student profile not found", { status: 404 });

  // Step 5: Parse event ID from request body
  const { eventId } = await req.json();

  // Step 6: Check event exists
  const event = await prisma.event.findUnique({ where: { id: eventId } });
  if (!event) return new Response("Event not found", { status: 404 });

  // Step 7: Prevent duplicate registration
  const already = await prisma.eventRegistration.findFirst({
    where: { studentId: student.id, eventId }
  });
  if (already) return new Response("Already registered", { status: 409 });

  // Step 8: Register student for event
  await prisma.eventRegistration.create({
    data: { studentId: student.id, eventId }
  });

  return Response.json({ message: "Registered successfully" });
}
