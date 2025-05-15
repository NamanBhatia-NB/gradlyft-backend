import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Missing credentials" }), {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 401,
    });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.NEXTAUTH_SECRET,
    { expiresIn: "24h" }
  );

  return Response.json({ token });
}
