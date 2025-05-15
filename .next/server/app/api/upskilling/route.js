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
exports.id = "app/api/upskilling/route";
exports.ids = ["app/api/upskilling/route"];
exports.modules = {

/***/ "(rsc)/./app/api/upskilling/route.js":
/*!*************************************!*\
  !*** ./app/api/upskilling/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/db */ \"(rsc)/./app/utils/db.js\");\n\n\n\nasync function GET() {\n    try {\n        const resources = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.upskillingResource.findMany({\n            orderBy: {\n                title: 'asc'\n            }\n        });\n        return Response.json(resources);\n    } catch (error) {\n        return new Response(\"Failed to fetch resources\", {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    // 🧠 Extract and verify token from cookies\n    const cookieHeader = req.headers.get(\"cookie\") || \"\";\n    const parsed = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookieHeader);\n    const tokenRaw = parsed[\"gradlyft_token\"];\n    if (!tokenRaw) return new Response(\"Unauthorized\", {\n        status: 401\n    });\n    let token;\n    try {\n        token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(tokenRaw, process.env.NEXTAUTH_SECRET);\n    } catch  {\n        return new Response(\"Invalid token\", {\n            status: 403\n        });\n    }\n    // ✅ Only admin can add resources\n    if (token.role !== \"ADMIN\") return new Response(\"Forbidden\", {\n        status: 403\n    });\n    const { title, category, type, fileUrl } = await req.json();\n    try {\n        const resource = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.upskillingResource.create({\n            data: {\n                title,\n                category,\n                type,\n                fileUrl\n            }\n        });\n        return Response.json(resource);\n    } catch (error) {\n        console.error(\"Create resource failed:\", error);\n        return new Response(\"Failed to create resource\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Vwc2tpbGxpbmcvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ0E7QUFDUztBQUVqQyxlQUFlRztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsWUFBWSxNQUFNRiw2Q0FBTUEsQ0FBQ0csa0JBQWtCLENBQUNDLFFBQVEsQ0FBQztZQUN6REMsU0FBUztnQkFBRUMsT0FBTztZQUFNO1FBQzFCO1FBQ0EsT0FBT0MsU0FBU0MsSUFBSSxDQUFDTjtJQUN2QixFQUFFLE9BQU9PLE9BQU87UUFDZCxPQUFPLElBQUlGLFNBQVMsNkJBQTZCO1lBQUVHLFFBQVE7UUFBSTtJQUNqRTtBQUNGO0FBRU8sZUFBZUMsS0FBS0MsR0FBRztJQUM1QiwyQ0FBMkM7SUFDM0MsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYTtJQUNsRCxNQUFNQyxTQUFTbEIsNkNBQUtBLENBQUNlO0lBQ3JCLE1BQU1JLFdBQVdELE1BQU0sQ0FBQyxpQkFBaUI7SUFDekMsSUFBSSxDQUFDQyxVQUFVLE9BQU8sSUFBSVYsU0FBUyxnQkFBZ0I7UUFBRUcsUUFBUTtJQUFJO0lBRWpFLElBQUlRO0lBQ0osSUFBSTtRQUNGQSxRQUFRbkIsMERBQVUsQ0FBQ2tCLFVBQVVHLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUMxRCxFQUFFLE9BQU07UUFDTixPQUFPLElBQUlmLFNBQVMsaUJBQWlCO1lBQUVHLFFBQVE7UUFBSTtJQUNyRDtJQUVBLGlDQUFpQztJQUNqQyxJQUFJUSxNQUFNSyxJQUFJLEtBQUssU0FBUyxPQUFPLElBQUloQixTQUFTLGFBQWE7UUFBRUcsUUFBUTtJQUFJO0lBRTNFLE1BQU0sRUFBRUosS0FBSyxFQUFFa0IsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1kLElBQUlKLElBQUk7SUFFekQsSUFBSTtRQUNGLE1BQU1tQixXQUFXLE1BQU0zQiw2Q0FBTUEsQ0FBQ0csa0JBQWtCLENBQUN5QixNQUFNLENBQUM7WUFDdERDLE1BQU07Z0JBQUV2QjtnQkFBT2tCO2dCQUFVQztnQkFBTUM7WUFBUTtRQUN6QztRQUVBLE9BQU9uQixTQUFTQyxJQUFJLENBQUNtQjtJQUN2QixFQUFFLE9BQU9sQixPQUFPO1FBQ2RxQixRQUFRckIsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBTyxJQUFJRixTQUFTLDZCQUE2QjtZQUFFRyxRQUFRO1FBQUk7SUFDakU7QUFDRiIsInNvdXJjZXMiOlsiRTpcXDEwLTA0LTI1XFxEZXNrdG9wXFxOYW1hblxcRXh0cmEgU2tpbGxzXFxTb2NpZXRpZXMgVGFza3NcXEUtQ2VsbFxcRWNlbGwgU3RhcnR1cFxcR3JhZGx5ZnRcXGFwcFxcYXBpXFx1cHNraWxsaW5nXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJjb29raWVcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi91dGlscy9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gYXdhaXQgcHJpc21hLnVwc2tpbGxpbmdSZXNvdXJjZS5maW5kTWFueSh7XHJcbiAgICAgIG9yZGVyQnk6IHsgdGl0bGU6ICdhc2MnIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzb3VyY2VzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkZhaWxlZCB0byBmZXRjaCByZXNvdXJjZXNcIiwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIC8vIPCfp6AgRXh0cmFjdCBhbmQgdmVyaWZ5IHRva2VuIGZyb20gY29va2llc1xyXG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSB8fCBcIlwiO1xyXG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlKGNvb2tpZUhlYWRlcik7XHJcbiAgY29uc3QgdG9rZW5SYXcgPSBwYXJzZWRbXCJncmFkbHlmdF90b2tlblwiXTtcclxuICBpZiAoIXRva2VuUmF3KSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGxldCB0b2tlbjtcclxuICB0cnkge1xyXG4gICAgdG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuUmF3LCBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkludmFsaWQgdG9rZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuICB9XHJcblxyXG4gIC8vIOKchSBPbmx5IGFkbWluIGNhbiBhZGQgcmVzb3VyY2VzXHJcbiAgaWYgKHRva2VuLnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xyXG5cclxuICBjb25zdCB7IHRpdGxlLCBjYXRlZ29yeSwgdHlwZSwgZmlsZVVybCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgcHJpc21hLnVwc2tpbGxpbmdSZXNvdXJjZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHRpdGxlLCBjYXRlZ29yeSwgdHlwZSwgZmlsZVVybCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihyZXNvdXJjZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgcmVzb3VyY2UgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGNyZWF0ZSByZXNvdXJjZVwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicGFyc2UiLCJqd3QiLCJwcmlzbWEiLCJHRVQiLCJyZXNvdXJjZXMiLCJ1cHNraWxsaW5nUmVzb3VyY2UiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJ0aXRsZSIsIlJlc3BvbnNlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiUE9TVCIsInJlcSIsImNvb2tpZUhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJwYXJzZWQiLCJ0b2tlblJhdyIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInJvbGUiLCJjYXRlZ29yeSIsInR5cGUiLCJmaWxlVXJsIiwicmVzb3VyY2UiLCJjcmVhdGUiLCJkYXRhIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upskilling/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupskilling%2Froute&page=%2Fapi%2Fupskilling%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupskilling%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupskilling%2Froute&page=%2Fapi%2Fupskilling%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupskilling%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_upskilling_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/upskilling/route.js */ \"(rsc)/./app/api/upskilling/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upskilling/route\",\n        pathname: \"/api/upskilling\",\n        filename: \"route\",\n        bundlePath: \"app/api/upskilling/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\upskilling\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_upskilling_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cHNraWxsaW5nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1cHNraWxsaW5nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXBza2lsbGluZyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNEU7QUFDeko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXHVwc2tpbGxpbmdcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Vwc2tpbGxpbmcvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cHNraWxsaW5nXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91cHNraWxsaW5nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcMTAtMDQtMjVcXFxcRGVza3RvcFxcXFxOYW1hblxcXFxFeHRyYSBTa2lsbHNcXFxcU29jaWV0aWVzIFRhc2tzXFxcXEUtQ2VsbFxcXFxFY2VsbCBTdGFydHVwXFxcXEdyYWRseWZ0XFxcXGFwcFxcXFxhcGlcXFxcdXBza2lsbGluZ1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupskilling%2Froute&page=%2Fapi%2Fupskilling%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupskilling%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupskilling%2Froute&page=%2Fapi%2Fupskilling%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupskilling%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();