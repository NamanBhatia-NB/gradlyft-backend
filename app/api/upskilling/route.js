import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/db";

export async function GET() {
  try {
    const resources = await prisma.upskillingResource.findMany({
      orderBy: { title: 'asc' }
    });
    return Response.json(resources);
  } catch (error) {
    return new Response("Failed to fetch resources", { status: 500 });
  }
}

export async function POST(req) {
  //  Extract and verify token from cookies
  const cookieHeader = req.headers.get("cookie") || "";
  const parsed = parse(cookieHeader);
  const tokenRaw = parsed["gradlyft_token"];
  if (!tokenRaw) return new Response("Unauthorized", { status: 401 });

  let token;
  try {
    token = jwt.verify(tokenRaw, process.env.NEXTAUTH_SECRET);
  } catch {
    return new Response("Invalid token", { status: 403 });
  }

  //  Only admin can add resources
  if (token.role !== "ADMIN") return new Response("Forbidden", { status: 403 });

  const { title, category, type, fileUrl } = await req.json();

  try {
    const resource = await prisma.upskillingResource.create({
      data: { title, category, type, fileUrl }
    });

    return Response.json(resource);
  } catch (error) {
    console.error("Create resource failed:", error);
    return new Response("Failed to create resource", { status: 500 });
  }
}
