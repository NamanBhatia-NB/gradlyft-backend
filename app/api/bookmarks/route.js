import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/db";

export async function POST(req) {
  const cookieHeader = req.headers.get("cookie") || "";
  const parsedCookies = parse(cookieHeader);
  const tokenRaw = parsedCookies["gradlyft_token"];

  if (!tokenRaw) return new Response("Unauthorized", { status: 401 });

  let token;
  try {
    token = jwt.verify(tokenRaw, process.env.NEXTAUTH_SECRET);
  } catch {
    return new Response("Invalid token", { status: 403 });
  }
  console.log("Decoded Token:", token);


  if (token.role !== "STUDENT") return new Response("Forbidden", { status: 403 });

  const { jobId } = await req.json();
  const student = await prisma.studentProfile.findUnique({
    where: { userId: token.id }
  });

  if (!student) return new Response("Student profile not found", { status: 404 });

  const existing = await prisma.bookmark.findFirst({
    where: { studentId: student.id, jobId }
  });

  if (existing) {
    await prisma.bookmark.delete({ where: { id: existing.id } });
    return Response.json({ message: "Bookmark removed" });
  }

  await prisma.bookmark.create({
    data: { studentId: student.id, jobId }
  });

  return Response.json({ message: "Bookmark added" });
}
