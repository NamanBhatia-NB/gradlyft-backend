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
exports.id = "app/api/bookmarks/route";
exports.ids = ["app/api/bookmarks/route"];
exports.modules = {

/***/ "(rsc)/./app/api/bookmarks/route.js":
/*!************************************!*\
  !*** ./app/api/bookmarks/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/db */ \"(rsc)/./app/utils/db.js\");\n\n\n\nasync function POST(req) {\n    const cookieHeader = req.headers.get(\"cookie\") || \"\";\n    const parsedCookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookieHeader);\n    const tokenRaw = parsedCookies[\"gradlyft_token\"];\n    if (!tokenRaw) return new Response(\"Unauthorized\", {\n        status: 401\n    });\n    let token;\n    try {\n        token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(tokenRaw, process.env.NEXTAUTH_SECRET);\n    } catch  {\n        return new Response(\"Invalid token\", {\n            status: 403\n        });\n    }\n    console.log(\"Decoded Token:\", token);\n    if (token.role !== \"STUDENT\") return new Response(\"Forbidden\", {\n        status: 403\n    });\n    const { jobId } = await req.json();\n    const student = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.studentProfile.findUnique({\n        where: {\n            userId: token.id\n        }\n    });\n    if (!student) return new Response(\"Student profile not found\", {\n        status: 404\n    });\n    const existing = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.bookmark.findFirst({\n        where: {\n            studentId: student.id,\n            jobId\n        }\n    });\n    if (existing) {\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.bookmark.delete({\n            where: {\n                id: existing.id\n            }\n        });\n        return Response.json({\n            message: \"Bookmark removed\"\n        });\n    }\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.bookmark.create({\n        data: {\n            studentId: student.id,\n            jobId\n        }\n    });\n    return Response.json({\n        message: \"Bookmark added\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jvb2ttYXJrcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNBO0FBQ1M7QUFFakMsZUFBZUcsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxlQUFlRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhO0lBQ2xELE1BQU1DLGdCQUFnQlIsNkNBQUtBLENBQUNLO0lBQzVCLE1BQU1JLFdBQVdELGFBQWEsQ0FBQyxpQkFBaUI7SUFFaEQsSUFBSSxDQUFDQyxVQUFVLE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7UUFBRUMsUUFBUTtJQUFJO0lBRWpFLElBQUlDO0lBQ0osSUFBSTtRQUNGQSxRQUFRWCwwREFBVSxDQUFDUSxVQUFVSyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDMUQsRUFBRSxPQUFNO1FBQ04sT0FBTyxJQUFJTixTQUFTLGlCQUFpQjtZQUFFQyxRQUFRO1FBQUk7SUFDckQ7SUFDQU0sUUFBUUMsR0FBRyxDQUFDLGtCQUFrQk47SUFHOUIsSUFBSUEsTUFBTU8sSUFBSSxLQUFLLFdBQVcsT0FBTyxJQUFJVCxTQUFTLGFBQWE7UUFBRUMsUUFBUTtJQUFJO0lBRTdFLE1BQU0sRUFBRVMsS0FBSyxFQUFFLEdBQUcsTUFBTWhCLElBQUlpQixJQUFJO0lBQ2hDLE1BQU1DLFVBQVUsTUFBTXBCLDZDQUFNQSxDQUFDcUIsY0FBYyxDQUFDQyxVQUFVLENBQUM7UUFDckRDLE9BQU87WUFBRUMsUUFBUWQsTUFBTWUsRUFBRTtRQUFDO0lBQzVCO0lBRUEsSUFBSSxDQUFDTCxTQUFTLE9BQU8sSUFBSVosU0FBUyw2QkFBNkI7UUFBRUMsUUFBUTtJQUFJO0lBRTdFLE1BQU1pQixXQUFXLE1BQU0xQiw2Q0FBTUEsQ0FBQzJCLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDO1FBQy9DTCxPQUFPO1lBQUVNLFdBQVdULFFBQVFLLEVBQUU7WUFBRVA7UUFBTTtJQUN4QztJQUVBLElBQUlRLFVBQVU7UUFDWixNQUFNMUIsNkNBQU1BLENBQUMyQixRQUFRLENBQUNHLE1BQU0sQ0FBQztZQUFFUCxPQUFPO2dCQUFFRSxJQUFJQyxTQUFTRCxFQUFFO1lBQUM7UUFBRTtRQUMxRCxPQUFPakIsU0FBU1csSUFBSSxDQUFDO1lBQUVZLFNBQVM7UUFBbUI7SUFDckQ7SUFFQSxNQUFNL0IsNkNBQU1BLENBQUMyQixRQUFRLENBQUNLLE1BQU0sQ0FBQztRQUMzQkMsTUFBTTtZQUFFSixXQUFXVCxRQUFRSyxFQUFFO1lBQUVQO1FBQU07SUFDdkM7SUFFQSxPQUFPVixTQUFTVyxJQUFJLENBQUM7UUFBRVksU0FBUztJQUFpQjtBQUNuRCIsInNvdXJjZXMiOlsiRTpcXDEwLTA0LTI1XFxEZXNrdG9wXFxOYW1hblxcRXh0cmEgU2tpbGxzXFxTb2NpZXRpZXMgVGFza3NcXEUtQ2VsbFxcRWNlbGwgU3RhcnR1cFxcR3JhZGx5ZnRcXGFwcFxcYXBpXFxib29rbWFya3NcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBjb25zdCBjb29raWVIZWFkZXIgPSByZXEuaGVhZGVycy5nZXQoXCJjb29raWVcIikgfHwgXCJcIjtcclxuICBjb25zdCBwYXJzZWRDb29raWVzID0gcGFyc2UoY29va2llSGVhZGVyKTtcclxuICBjb25zdCB0b2tlblJhdyA9IHBhcnNlZENvb2tpZXNbXCJncmFkbHlmdF90b2tlblwiXTtcclxuXHJcbiAgaWYgKCF0b2tlblJhdykgcmV0dXJuIG5ldyBSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xyXG5cclxuICBsZXQgdG9rZW47XHJcbiAgdHJ5IHtcclxuICAgIHRva2VuID0gand0LnZlcmlmeSh0b2tlblJhdywgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJJbnZhbGlkIHRva2VuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiRGVjb2RlZCBUb2tlbjpcIiwgdG9rZW4pO1xyXG5cclxuXHJcbiAgaWYgKHRva2VuLnJvbGUgIT09IFwiU1RVREVOVFwiKSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XHJcblxyXG4gIGNvbnN0IHsgam9iSWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHByaXNtYS5zdHVkZW50UHJvZmlsZS5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IHVzZXJJZDogdG9rZW4uaWQgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXN0dWRlbnQpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJTdHVkZW50IHByb2ZpbGUgbm90IGZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLmJvb2ttYXJrLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyBzdHVkZW50SWQ6IHN0dWRlbnQuaWQsIGpvYklkIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYm9va21hcmsuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGV4aXN0aW5nLmlkIH0gfSk7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQm9va21hcmsgcmVtb3ZlZFwiIH0pO1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgcHJpc21hLmJvb2ttYXJrLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHN0dWRlbnRJZDogc3R1ZGVudC5pZCwgam9iSWQgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQm9va21hcmsgYWRkZWRcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsicGFyc2UiLCJqd3QiLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwiY29va2llSGVhZGVyIiwiaGVhZGVycyIsImdldCIsInBhcnNlZENvb2tpZXMiLCJ0b2tlblJhdyIsIlJlc3BvbnNlIiwic3RhdHVzIiwidG9rZW4iLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY29uc29sZSIsImxvZyIsInJvbGUiLCJqb2JJZCIsImpzb24iLCJzdHVkZW50Iiwic3R1ZGVudFByb2ZpbGUiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VySWQiLCJpZCIsImV4aXN0aW5nIiwiYm9va21hcmsiLCJmaW5kRmlyc3QiLCJzdHVkZW50SWQiLCJkZWxldGUiLCJtZXNzYWdlIiwiY3JlYXRlIiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/bookmarks/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookmarks%2Froute&page=%2Fapi%2Fbookmarks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookmarks%2Froute&page=%2Fapi%2Fbookmarks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_bookmarks_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/bookmarks/route.js */ \"(rsc)/./app/api/bookmarks/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/bookmarks/route\",\n        pathname: \"/api/bookmarks\",\n        filename: \"route\",\n        bundlePath: \"app/api/bookmarks/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\bookmarks\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_bookmarks_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZib29rbWFya3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmJvb2ttYXJrcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJvb2ttYXJrcyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkU7QUFDeEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXGJvb2ttYXJrc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYm9va21hcmtzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYm9va21hcmtzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ib29rbWFya3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFwxMC0wNC0yNVxcXFxEZXNrdG9wXFxcXE5hbWFuXFxcXEV4dHJhIFNraWxsc1xcXFxTb2NpZXRpZXMgVGFza3NcXFxcRS1DZWxsXFxcXEVjZWxsIFN0YXJ0dXBcXFxcR3JhZGx5ZnRcXFxcYXBwXFxcXGFwaVxcXFxib29rbWFya3NcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookmarks%2Froute&page=%2Fapi%2Fbookmarks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbookmarks%2Froute&page=%2Fapi%2Fbookmarks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookmarks%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();