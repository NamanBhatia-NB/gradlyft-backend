import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { prisma } from "../../../utils/db";

export async function GET(req) {
  // Step 1: Verify admin token from cookie
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

  if (token.role !== "ADMIN") return new Response("Forbidden", { status: 403 });

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  try {
    // Step 2: Run analytics queries
    const [avgDuration, topPages, userGroups, topJobs, dailyActiveUsers, roleBreakdown, activeUsersByTime] = await Promise.all([
      prisma.userSession.aggregate({
        _avg: { duration: true }
      }),

      prisma.userSession.groupBy({
        by: ["page"],
        _count: { page: true },
        orderBy: { _count: { page: "desc" } },
        take: 5
      }),

      prisma.userSession.groupBy({
        by: ["userId"]
      }),

      prisma.bookmark.groupBy({
        by: ["jobId"],
        _count: { jobId: true },
        orderBy: { _count: { jobId: "desc" } },
        take: 5
      }),

      prisma.userSession.groupBy({
        by: ["createdAt"],
        where: { createdAt: { gte: sevenDaysAgo } },
        _count: { id: true },
        orderBy: { createdAt: "asc" }
      }),

      prisma.user.groupBy({
        by: ["role"],
        _count: { role: true }
      }),

      prisma.userSession.groupBy({
        by: ["userId"],
        _sum: { duration: true },
        orderBy: { _sum: { duration: "desc" } },
        take: 5
      })
    ]);

    const totalUsers = userGroups.length;

    // Step 3: Format and return
    return Response.json({
      averageSessionTime: Math.round(avgDuration._avg.duration || 0), // in seconds
      topVisitedPages: topPages.map(p => ({ page: p.page, count: p._count.page })),
      activeUsers: totalUsers,
      mostBookmarkedJobs: topJobs.map(j => ({ jobId: j.jobId, count: j._count.jobId })),
      dailyActiveUsers: dailyActiveUsers.map(d => ({
        date: d.createdAt.toISOString().split("T")[0],
        count: d._count.id
      })),
      roleBreakdown: roleBreakdown.reduce((acc, r) => {
        acc[r.role] = r._count.role;
        return acc;
      }, {}),
      topUsersByTime: activeUsersByTime.map(u => ({
        userId: u.userId,
        totalDuration: u._sum.duration
      }))
    });
  } catch (err) {
    console.error("Admin analytics error:", err);
    return new Response("Failed to fetch analytics", { status: 500 });
  }
}
