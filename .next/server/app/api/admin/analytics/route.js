/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/analytics/route";
exports.ids = ["app/api/admin/analytics/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/analytics/route.js":
/*!******************************************!*\
  !*** ./app/api/admin/analytics/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(rsc)/./app/utils/db.js\");\n\n\n\nasync function GET(req) {\n    // Step 1: Verify admin token from cookie\n    const cookieHeader = req.headers.get(\"cookie\") || \"\";\n    const parsed = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookieHeader);\n    const tokenRaw = parsed[\"gradlyft_token\"];\n    if (!tokenRaw) return new Response(\"Unauthorized\", {\n        status: 401\n    });\n    let token;\n    try {\n        token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(tokenRaw, process.env.NEXTAUTH_SECRET);\n    } catch  {\n        return new Response(\"Invalid token\", {\n            status: 403\n        });\n    }\n    if (token.role !== \"ADMIN\") return new Response(\"Forbidden\", {\n        status: 403\n    });\n    const sevenDaysAgo = new Date();\n    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);\n    try {\n        // Step 2: Run analytics queries\n        const [avgDuration, topPages, userGroups, topJobs, dailyActiveUsers, roleBreakdown, activeUsersByTime] = await Promise.all([\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.aggregate({\n                _avg: {\n                    duration: true\n                }\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.groupBy({\n                by: [\n                    \"page\"\n                ],\n                _count: {\n                    page: true\n                },\n                orderBy: {\n                    _count: {\n                        page: \"desc\"\n                    }\n                },\n                take: 5\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.groupBy({\n                by: [\n                    \"userId\"\n                ]\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.bookmark.groupBy({\n                by: [\n                    \"jobId\"\n                ],\n                _count: {\n                    jobId: true\n                },\n                orderBy: {\n                    _count: {\n                        jobId: \"desc\"\n                    }\n                },\n                take: 5\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.groupBy({\n                by: [\n                    \"createdAt\"\n                ],\n                where: {\n                    createdAt: {\n                        gte: sevenDaysAgo\n                    }\n                },\n                _count: {\n                    id: true\n                },\n                orderBy: {\n                    createdAt: \"asc\"\n                }\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.groupBy({\n                by: [\n                    \"role\"\n                ],\n                _count: {\n                    role: true\n                }\n            }),\n            _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.groupBy({\n                by: [\n                    \"userId\"\n                ],\n                _sum: {\n                    duration: true\n                },\n                orderBy: {\n                    _sum: {\n                        duration: \"desc\"\n                    }\n                },\n                take: 5\n            })\n        ]);\n        const totalUsers = userGroups.length;\n        // Step 3: Format and return\n        return Response.json({\n            averageSessionTime: Math.round(avgDuration._avg.duration || 0),\n            topVisitedPages: topPages.map((p)=>({\n                    page: p.page,\n                    count: p._count.page\n                })),\n            activeUsers: totalUsers,\n            mostBookmarkedJobs: topJobs.map((j)=>({\n                    jobId: j.jobId,\n                    count: j._count.jobId\n                })),\n            dailyActiveUsers: dailyActiveUsers.map((d)=>({\n                    date: d.createdAt.toISOString().split(\"T\")[0],\n                    count: d._count.id\n                })),\n            roleBreakdown: roleBreakdown.reduce((acc, r)=>{\n                acc[r.role] = r._count.role;\n                return acc;\n            }, {}),\n            topUsersByTime: activeUsersByTime.map((u)=>({\n                    userId: u.userId,\n                    totalDuration: u._sum.duration\n                }))\n        });\n    } catch (err) {\n        console.error(\"Admin analytics error:\", err);\n        return new Response(\"Failed to fetch analytics\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLENBQUFBLElBQU07b0JBQUVuQixNQUFNbUIsRUFBRW5CLElBQUk7b0JBQUVvQixPQUFPRCxFQUFFcEIsTUFBTSxDQUFDQyxJQUFJO2dCQUFDO1lBQ3pFcUIsYUFBYVY7WUFDYlcsb0JBQW9CbkMsUUFBUStCLEdBQUcsQ0FBQ0ssQ0FBQUEsSUFBTTtvQkFBRW5CLE9BQU9tQixFQUFFbkIsS0FBSztvQkFBRWdCLE9BQU9HLEVBQUV4QixNQUFNLENBQUNLLEtBQUs7Z0JBQUM7WUFDOUVoQixrQkFBa0JBLGlCQUFpQjhCLEdBQUcsQ0FBQ00sQ0FBQUEsSUFBTTtvQkFDM0NDLE1BQU1ELEVBQUVsQixTQUFTLENBQUNvQixXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0NQLE9BQU9JLEVBQUV6QixNQUFNLENBQUNTLEVBQUU7Z0JBQ3BCO1lBQ0FuQixlQUFlQSxjQUFjdUMsTUFBTSxDQUFDLENBQUNDLEtBQUtDO2dCQUN4Q0QsR0FBRyxDQUFDQyxFQUFFbkQsSUFBSSxDQUFDLEdBQUdtRCxFQUFFL0IsTUFBTSxDQUFDcEIsSUFBSTtnQkFDM0IsT0FBT2tEO1lBQ1QsR0FBRyxDQUFDO1lBQ0pFLGdCQUFnQnpDLGtCQUFrQjRCLEdBQUcsQ0FBQ2MsQ0FBQUEsSUFBTTtvQkFDMUNDLFFBQVFELEVBQUVDLE1BQU07b0JBQ2hCQyxlQUFlRixFQUFFdEIsSUFBSSxDQUFDZCxRQUFRO2dCQUNoQztRQUNGO0lBQ0YsRUFBRSxPQUFPdUMsS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCRjtRQUN4QyxPQUFPLElBQUkvRCxTQUFTLDZCQUE2QjtZQUFFQyxRQUFRO1FBQUk7SUFDakU7QUFDRiIsInNvdXJjZXMiOlsiRTpcXDEwLTA0LTI1XFxEZXNrdG9wXFxOYW1hblxcRXh0cmEgU2tpbGxzXFxTb2NpZXRpZXMgVGFza3NcXEUtQ2VsbFxcRWNlbGwgU3RhcnR1cFxcR3JhZGx5ZnRcXGFwcFxcYXBpXFxhZG1pblxcYW5hbHl0aWNzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJjb29raWVcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICAvLyBTdGVwIDE6IFZlcmlmeSBhZG1pbiB0b2tlbiBmcm9tIGNvb2tpZVxyXG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSB8fCBcIlwiO1xyXG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlKGNvb2tpZUhlYWRlcik7XHJcbiAgY29uc3QgdG9rZW5SYXcgPSBwYXJzZWRbXCJncmFkbHlmdF90b2tlblwiXTtcclxuICBpZiAoIXRva2VuUmF3KSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGxldCB0b2tlbjtcclxuICB0cnkge1xyXG4gICAgdG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuUmF3LCBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkludmFsaWQgdG9rZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuICB9XHJcblxyXG4gIGlmICh0b2tlbi5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuXHJcbiAgY29uc3Qgc2V2ZW5EYXlzQWdvID0gbmV3IERhdGUoKTtcclxuICBzZXZlbkRheXNBZ28uc2V0RGF0ZShzZXZlbkRheXNBZ28uZ2V0RGF0ZSgpIC0gNyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBTdGVwIDI6IFJ1biBhbmFseXRpY3MgcXVlcmllc1xyXG4gICAgY29uc3QgW2F2Z0R1cmF0aW9uLCB0b3BQYWdlcywgdXNlckdyb3VwcywgdG9wSm9icywgZGFpbHlBY3RpdmVVc2Vycywgcm9sZUJyZWFrZG93biwgYWN0aXZlVXNlcnNCeVRpbWVdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBwcmlzbWEudXNlclNlc3Npb24uYWdncmVnYXRlKHtcclxuICAgICAgICBfYXZnOiB7IGR1cmF0aW9uOiB0cnVlIH1cclxuICAgICAgfSksXHJcblxyXG4gICAgICBwcmlzbWEudXNlclNlc3Npb24uZ3JvdXBCeSh7XHJcbiAgICAgICAgYnk6IFtcInBhZ2VcIl0sXHJcbiAgICAgICAgX2NvdW50OiB7IHBhZ2U6IHRydWUgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IF9jb3VudDogeyBwYWdlOiBcImRlc2NcIiB9IH0sXHJcbiAgICAgICAgdGFrZTogNVxyXG4gICAgICB9KSxcclxuXHJcbiAgICAgIHByaXNtYS51c2VyU2Vzc2lvbi5ncm91cEJ5KHtcclxuICAgICAgICBieTogW1widXNlcklkXCJdXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgcHJpc21hLmJvb2ttYXJrLmdyb3VwQnkoe1xyXG4gICAgICAgIGJ5OiBbXCJqb2JJZFwiXSxcclxuICAgICAgICBfY291bnQ6IHsgam9iSWQ6IHRydWUgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IF9jb3VudDogeyBqb2JJZDogXCJkZXNjXCIgfSB9LFxyXG4gICAgICAgIHRha2U6IDVcclxuICAgICAgfSksXHJcblxyXG4gICAgICBwcmlzbWEudXNlclNlc3Npb24uZ3JvdXBCeSh7XHJcbiAgICAgICAgYnk6IFtcImNyZWF0ZWRBdFwiXSxcclxuICAgICAgICB3aGVyZTogeyBjcmVhdGVkQXQ6IHsgZ3RlOiBzZXZlbkRheXNBZ28gfSB9LFxyXG4gICAgICAgIF9jb3VudDogeyBpZDogdHJ1ZSB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImFzY1wiIH1cclxuICAgICAgfSksXHJcblxyXG4gICAgICBwcmlzbWEudXNlci5ncm91cEJ5KHtcclxuICAgICAgICBieTogW1wicm9sZVwiXSxcclxuICAgICAgICBfY291bnQ6IHsgcm9sZTogdHJ1ZSB9XHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgcHJpc21hLnVzZXJTZXNzaW9uLmdyb3VwQnkoe1xyXG4gICAgICAgIGJ5OiBbXCJ1c2VySWRcIl0sXHJcbiAgICAgICAgX3N1bTogeyBkdXJhdGlvbjogdHJ1ZSB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHsgX3N1bTogeyBkdXJhdGlvbjogXCJkZXNjXCIgfSB9LFxyXG4gICAgICAgIHRha2U6IDVcclxuICAgICAgfSlcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsVXNlcnMgPSB1c2VyR3JvdXBzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTdGVwIDM6IEZvcm1hdCBhbmQgcmV0dXJuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgIGF2ZXJhZ2VTZXNzaW9uVGltZTogTWF0aC5yb3VuZChhdmdEdXJhdGlvbi5fYXZnLmR1cmF0aW9uIHx8IDApLCAvLyBpbiBzZWNvbmRzXHJcbiAgICAgIHRvcFZpc2l0ZWRQYWdlczogdG9wUGFnZXMubWFwKHAgPT4gKHsgcGFnZTogcC5wYWdlLCBjb3VudDogcC5fY291bnQucGFnZSB9KSksXHJcbiAgICAgIGFjdGl2ZVVzZXJzOiB0b3RhbFVzZXJzLFxyXG4gICAgICBtb3N0Qm9va21hcmtlZEpvYnM6IHRvcEpvYnMubWFwKGogPT4gKHsgam9iSWQ6IGouam9iSWQsIGNvdW50OiBqLl9jb3VudC5qb2JJZCB9KSksXHJcbiAgICAgIGRhaWx5QWN0aXZlVXNlcnM6IGRhaWx5QWN0aXZlVXNlcnMubWFwKGQgPT4gKHtcclxuICAgICAgICBkYXRlOiBkLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSxcclxuICAgICAgICBjb3VudDogZC5fY291bnQuaWRcclxuICAgICAgfSkpLFxyXG4gICAgICByb2xlQnJlYWtkb3duOiByb2xlQnJlYWtkb3duLnJlZHVjZSgoYWNjLCByKSA9PiB7XHJcbiAgICAgICAgYWNjW3Iucm9sZV0gPSByLl9jb3VudC5yb2xlO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KSxcclxuICAgICAgdG9wVXNlcnNCeVRpbWU6IGFjdGl2ZVVzZXJzQnlUaW1lLm1hcCh1ID0+ICh7XHJcbiAgICAgICAgdXNlcklkOiB1LnVzZXJJZCxcclxuICAgICAgICB0b3RhbER1cmF0aW9uOiB1Ll9zdW0uZHVyYXRpb25cclxuICAgICAgfSkpXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJBZG1pbiBhbmFseXRpY3MgZXJyb3I6XCIsIGVycik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGZldGNoIGFuYWx5dGljc1wiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicGFyc2UiLCJqd3QiLCJwcmlzbWEiLCJHRVQiLCJyZXEiLCJjb29raWVIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwicGFyc2VkIiwidG9rZW5SYXciLCJSZXNwb25zZSIsInN0YXR1cyIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInJvbGUiLCJzZXZlbkRheXNBZ28iLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJhdmdEdXJhdGlvbiIsInRvcFBhZ2VzIiwidXNlckdyb3VwcyIsInRvcEpvYnMiLCJkYWlseUFjdGl2ZVVzZXJzIiwicm9sZUJyZWFrZG93biIsImFjdGl2ZVVzZXJzQnlUaW1lIiwiUHJvbWlzZSIsImFsbCIsInVzZXJTZXNzaW9uIiwiYWdncmVnYXRlIiwiX2F2ZyIsImR1cmF0aW9uIiwiZ3JvdXBCeSIsImJ5IiwiX2NvdW50IiwicGFnZSIsIm9yZGVyQnkiLCJ0YWtlIiwiYm9va21hcmsiLCJqb2JJZCIsIndoZXJlIiwiY3JlYXRlZEF0IiwiZ3RlIiwiaWQiLCJ1c2VyIiwiX3N1bSIsInRvdGFsVXNlcnMiLCJsZW5ndGgiLCJqc29uIiwiYXZlcmFnZVNlc3Npb25UaW1lIiwiTWF0aCIsInJvdW5kIiwidG9wVmlzaXRlZFBhZ2VzIiwibWFwIiwicCIsImNvdW50IiwiYWN0aXZlVXNlcnMiLCJtb3N0Qm9va21hcmtlZEpvYnMiLCJqIiwiZCIsImRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwiciIsInRvcFVzZXJzQnlUaW1lIiwidSIsInVzZXJJZCIsInRvdGFsRHVyYXRpb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/analytics/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_admin_analytics_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/analytics/route.js */ \"(rsc)/./app/api/admin/analytics/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/analytics/route\",\n        pathname: \"/api/admin/analytics\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/analytics/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\admin\\\\analytics\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_admin_analytics_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmFuYWx5dGljcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZhbmFseXRpY3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmFuYWx5dGljcyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0Y7QUFDL0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXGFuYWx5dGljc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vYW5hbHl0aWNzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vYW5hbHl0aWNzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9hbmFseXRpY3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFwxMC0wNC0yNVxcXFxEZXNrdG9wXFxcXE5hbWFuXFxcXEV4dHJhIFNraWxsc1xcXFxTb2NpZXRpZXMgVGFza3NcXFxcRS1DZWxsXFxcXEVjZWxsIFN0YXJ0dXBcXFxcR3JhZGx5ZnRcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxhbmFseXRpY3NcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fanalytics%2Froute&page=%2Fapi%2Fadmin%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fanalytics%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();