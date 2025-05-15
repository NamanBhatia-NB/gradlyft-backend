import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, password, role, ...profile } = data;

    if (!email || !password || !role) {
      return new Response("Missing required fields", { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return new Response("User already exists", { status: 400 });

    const hashed = await bcrypt.hash(password, 10);

    const userData = {
      email,
      password: hashed,
      role
    };

    if (role === "STUDENT") {
      const { name, college, degree, year, interests, cvUrl } = profile;

      if (!name || !college || !degree || !year || !interests) {
        return new Response("Incomplete student profile", { status: 400 });
      }

      userData.student = {
        create: { name, college, degree, year, interests, cvUrl: cvUrl || "" }
      };
    }

    if (role === "EMPLOYER") {
      const { name, company, designation } = profile;

      if (!name || !company || !designation) {
        return new Response("Incomplete employer profile", { status: 400 });
      }

      userData.employer = {
        create: { name, company, designation }
      };
    }

    const user = await prisma.user.create({ data: userData });

    return Response.json({ userId: user.id, success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return new Response("Server error during signup", { status: 500 });
  }
}
