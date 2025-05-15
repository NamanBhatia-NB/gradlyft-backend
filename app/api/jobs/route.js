import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/db";

export async function POST(req) {
  const tokenRaw = cookies().get("gradlyft_token")?.value;

  if (!tokenRaw) {
    return new Response("Unauthorized", { status: 401 });
  }

  let token;
  try {
    token = jwt.verify(tokenRaw, process.env.NEXTAUTH_SECRET);
    console.log("Decoded token:", token);
  } catch (err) {
    return new Response("Invalid token", { status: 403 });
  }

  if (token.role !== "EMPLOYER") {
    return new Response("Forbidden", { status: 403 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  // Lookup EmployerProfile using token.id (User.id)
  const employerProfile = await prisma.employerProfile.findUnique({
    where: { userId: token.id }
  });

  if (!employerProfile) {
    return new Response("Employer profile not found", { status: 404 });
  }

  try {
    const job = await prisma.job.create({
      data: {
        ...body,
        employerId: employerProfile.id,
        status: "PENDING"
      }
    });

    return Response.json({ job });
  } catch (error) {
    console.error("DB Error:", error);
    return new Response("Job creation failed", { status: 500 });
  }
}
