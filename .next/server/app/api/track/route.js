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
exports.id = "app/api/track/route";
exports.ids = ["app/api/track/route"];
exports.modules = {

/***/ "(rsc)/./app/api/track/route.js":
/*!********************************!*\
  !*** ./app/api/track/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/db */ \"(rsc)/./app/utils/db.js\");\n\n\n\nasync function POST(req) {\n    const cookieHeader = req.headers.get(\"cookie\") || \"\";\n    const tokenRaw = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookieHeader)[\"gradlyft_token\"];\n    let userId = null;\n    if (tokenRaw) {\n        try {\n            const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(tokenRaw, process.env.NEXTAUTH_SECRET);\n            userId = decoded?.id;\n        } catch  {\n        // ignore invalid tokens\n        }\n    }\n    const { page, action } = await req.json();\n    if (action === \"enter\") {\n        await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.create({\n            data: {\n                userId,\n                page,\n                action,\n                startedAt: new Date(),\n                userAgent: req.headers.get(\"user-agent\") || \"\",\n                ipAddress: req.headers.get(\"x-forwarded-for\") || \"\"\n            }\n        });\n    }\n    if (action === \"leave\") {\n        // find latest session for this user & page with no endedAt\n        const existing = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.findFirst({\n            where: {\n                userId,\n                page,\n                endedAt: null\n            },\n            orderBy: {\n                startedAt: \"desc\"\n            }\n        });\n        if (existing) {\n            const endedAt = new Date();\n            const duration = Math.floor((endedAt.getTime() - new Date(existing.startedAt).getTime()) / 1000);\n            await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.userSession.update({\n                where: {\n                    id: existing.id\n                },\n                data: {\n                    endedAt,\n                    duration,\n                    action: \"leave\"\n                }\n            });\n        }\n    }\n    return Response.json({\n        message: \"Tracked\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RyYWNrL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0E7QUFDUztBQUVqQyxlQUFlRyxLQUFLQyxHQUFHO0lBQzVCLE1BQU1DLGVBQWVELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWE7SUFDbEQsTUFBTUMsV0FBV1IsNkNBQUtBLENBQUNLLGFBQWEsQ0FBQyxpQkFBaUI7SUFDdEQsSUFBSUksU0FBUztJQUViLElBQUlELFVBQVU7UUFDWixJQUFJO1lBQ0YsTUFBTUUsVUFBVVQsMERBQVUsQ0FBQ08sVUFBVUksUUFBUUMsR0FBRyxDQUFDQyxlQUFlO1lBQ2hFTCxTQUFTQyxTQUFTSztRQUNwQixFQUFFLE9BQU07UUFDTix3QkFBd0I7UUFDMUI7SUFDRjtJQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNYixJQUFJYyxJQUFJO0lBRXZDLElBQUlELFdBQVcsU0FBUztRQUN0QixNQUFNZiw2Q0FBTUEsQ0FBQ2lCLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQzlCQyxNQUFNO2dCQUNKWjtnQkFDQU87Z0JBQ0FDO2dCQUNBSyxXQUFXLElBQUlDO2dCQUNmQyxXQUFXcEIsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCO2dCQUM1Q2tCLFdBQVdyQixJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0I7WUFDbkQ7UUFDRjtJQUNGO0lBRUEsSUFBSVUsV0FBVyxTQUFTO1FBQ3RCLDJEQUEyRDtRQUMzRCxNQUFNUyxXQUFXLE1BQU14Qiw2Q0FBTUEsQ0FBQ2lCLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDO1lBQ2xEQyxPQUFPO2dCQUFFbkI7Z0JBQVFPO2dCQUFNYSxTQUFTO1lBQUs7WUFDckNDLFNBQVM7Z0JBQUVSLFdBQVc7WUFBTztRQUMvQjtRQUVBLElBQUlJLFVBQVU7WUFDWixNQUFNRyxVQUFVLElBQUlOO1lBQ3BCLE1BQU1RLFdBQVdDLEtBQUtDLEtBQUssQ0FDekIsQ0FBQ0osUUFBUUssT0FBTyxLQUFLLElBQUlYLEtBQUtHLFNBQVNKLFNBQVMsRUFBRVksT0FBTyxFQUFDLElBQUs7WUFHakUsTUFBTWhDLDZDQUFNQSxDQUFDaUIsV0FBVyxDQUFDZ0IsTUFBTSxDQUFDO2dCQUM5QlAsT0FBTztvQkFBRWIsSUFBSVcsU0FBU1gsRUFBRTtnQkFBQztnQkFDekJNLE1BQU07b0JBQUVRO29CQUFTRTtvQkFBVWQsUUFBUTtnQkFBUTtZQUM3QztRQUNGO0lBQ0Y7SUFFQSxPQUFPbUIsU0FBU2xCLElBQUksQ0FBQztRQUFFbUIsU0FBUztJQUFVO0FBQzVDIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFxhcGlcXHRyYWNrXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJjb29raWVcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi91dGlscy9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgY29va2llSGVhZGVyID0gcmVxLmhlYWRlcnMuZ2V0KFwiY29va2llXCIpIHx8IFwiXCI7XHJcbiAgY29uc3QgdG9rZW5SYXcgPSBwYXJzZShjb29raWVIZWFkZXIpW1wiZ3JhZGx5ZnRfdG9rZW5cIl07XHJcbiAgbGV0IHVzZXJJZCA9IG51bGw7XHJcblxyXG4gIGlmICh0b2tlblJhdykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW5SYXcsIHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCk7XHJcbiAgICAgIHVzZXJJZCA9IGRlY29kZWQ/LmlkO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIC8vIGlnbm9yZSBpbnZhbGlkIHRva2Vuc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBwYWdlLCBhY3Rpb24gfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gIGlmIChhY3Rpb24gPT09IFwiZW50ZXJcIikge1xyXG4gICAgYXdhaXQgcHJpc21hLnVzZXJTZXNzaW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgc3RhcnRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHVzZXJBZ2VudDogcmVxLmhlYWRlcnMuZ2V0KFwidXNlci1hZ2VudFwiKSB8fCBcIlwiLFxyXG4gICAgICAgIGlwQWRkcmVzczogcmVxLmhlYWRlcnMuZ2V0KFwieC1mb3J3YXJkZWQtZm9yXCIpIHx8IFwiXCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uID09PSBcImxlYXZlXCIpIHtcclxuICAgIC8vIGZpbmQgbGF0ZXN0IHNlc3Npb24gZm9yIHRoaXMgdXNlciAmIHBhZ2Ugd2l0aCBubyBlbmRlZEF0XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS51c2VyU2Vzc2lvbi5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZTogeyB1c2VySWQsIHBhZ2UsIGVuZGVkQXQ6IG51bGwgfSxcclxuICAgICAgb3JkZXJCeTogeyBzdGFydGVkQXQ6IFwiZGVzY1wiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICBjb25zdCBlbmRlZEF0ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChlbmRlZEF0LmdldFRpbWUoKSAtIG5ldyBEYXRlKGV4aXN0aW5nLnN0YXJ0ZWRBdCkuZ2V0VGltZSgpKSAvIDEwMDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGF3YWl0IHByaXNtYS51c2VyU2Vzc2lvbi51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZy5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgZW5kZWRBdCwgZHVyYXRpb24sIGFjdGlvbjogXCJsZWF2ZVwiIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVHJhY2tlZFwiIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJwYXJzZSIsImp3dCIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJjb29raWVIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwidG9rZW5SYXciLCJ1c2VySWQiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImlkIiwicGFnZSIsImFjdGlvbiIsImpzb24iLCJ1c2VyU2Vzc2lvbiIsImNyZWF0ZSIsImRhdGEiLCJzdGFydGVkQXQiLCJEYXRlIiwidXNlckFnZW50IiwiaXBBZGRyZXNzIiwiZXhpc3RpbmciLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImVuZGVkQXQiLCJvcmRlckJ5IiwiZHVyYXRpb24iLCJNYXRoIiwiZmxvb3IiLCJnZXRUaW1lIiwidXBkYXRlIiwiUmVzcG9uc2UiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/track/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrack%2Froute&page=%2Fapi%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrack%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrack%2Froute&page=%2Fapi%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrack%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_track_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/track/route.js */ \"(rsc)/./app/api/track/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/track/route\",\n        pathname: \"/api/track\",\n        filename: \"route\",\n        bundlePath: \"app/api/track/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\track\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_track_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFjayUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdHJhY2slMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0cmFjayUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUU7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXHRyYWNrXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90cmFjay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RyYWNrXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90cmFjay9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXHRyYWNrXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrack%2Froute&page=%2Fapi%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrack%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrack%2Froute&page=%2Fapi%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrack%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();