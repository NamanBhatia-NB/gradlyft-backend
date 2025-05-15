import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/db";

export async function POST(req) {
  // Parse cookie
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

  // Restrict to admin only
  if (token.role !== "ADMIN") return new Response("Forbidden", { status: 403 });

  const { title, date, time, mode, description } = await req.json();

  try {
    const event = await prisma.event.create({
      data: {
        title,
        date: new Date(date),
        time,
        mode, // "ONLINE" or "OFFLINE"
        description
      }
    });

    return Response.json(event);
  } catch (error) {
    console.error("Create event failed:", error);
    return new Response("Failed to create event", { status: 500 });
  }
}
