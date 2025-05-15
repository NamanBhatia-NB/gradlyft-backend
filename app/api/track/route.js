import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/db";

export async function POST(req) {
  const cookieHeader = req.headers.get("cookie") || "";
  const tokenRaw = parse(cookieHeader)["gradlyft_token"];
  let userId = null;

  if (tokenRaw) {
    try {
      const decoded = jwt.verify(tokenRaw, process.env.NEXTAUTH_SECRET);
      userId = decoded?.id;
    } catch {
      // ignore invalid tokens
    }
  }

  const { page, action } = await req.json();

  if (action === "enter") {
    await prisma.userSession.create({
      data: {
        userId,
        page,
        action,
        startedAt: new Date(),
        userAgent: req.headers.get("user-agent") || "",
        ipAddress: req.headers.get("x-forwarded-for") || ""
      }
    });
  }

  if (action === "leave") {
    // find latest session for this user & page with no endedAt
    const existing = await prisma.userSession.findFirst({
      where: { userId, page, endedAt: null },
      orderBy: { startedAt: "desc" }
    });

    if (existing) {
      const endedAt = new Date();
      const duration = Math.floor(
        (endedAt.getTime() - new Date(existing.startedAt).getTime()) / 1000
      );

      await prisma.userSession.update({
        where: { id: existing.id },
        data: { endedAt, duration, action: "leave" }
      });
    }
  }

  return Response.json({ message: "Tracked" });
}
