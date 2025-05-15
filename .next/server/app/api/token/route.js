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
exports.id = "app/api/token/route";
exports.ids = ["app/api/token/route"];
exports.modules = {

/***/ "(rsc)/./app/api/token/route.js":
/*!********************************!*\
  !*** ./app/api/token/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./app/utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(req) {\n    const { email, password } = await req.json();\n    if (!email || !password) {\n        return new Response(JSON.stringify({\n            error: \"Missing credentials\"\n        }), {\n            status: 400\n        });\n    }\n    const user = await _utils_db__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (!user) {\n        return new Response(JSON.stringify({\n            error: \"User not found\"\n        }), {\n            status: 401\n        });\n    }\n    const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, user.password);\n    if (!isValid) {\n        return new Response(JSON.stringify({\n            error: \"Invalid password\"\n        }), {\n            status: 401\n        });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        id: user.id,\n        email: user.email,\n        role: user.role\n    }, process.env.NEXTAUTH_SECRET, {\n        expiresIn: \"24h\"\n    });\n    return Response.json({\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rva2VuL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ047QUFDQztBQUV4QixlQUFlRyxLQUFLQyxHQUFHO0lBQzVCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO0lBRTFDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVO1FBQ3ZCLE9BQU8sSUFBSUUsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBc0IsSUFBSTtZQUNwRUMsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1iLDZDQUFNQSxDQUFDYSxJQUFJLENBQUNDLFVBQVUsQ0FBQztRQUFFQyxPQUFPO1lBQUVWO1FBQU07SUFBRTtJQUU3RCxJQUFJLENBQUNRLE1BQU07UUFDVCxPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQWlCLElBQUk7WUFDL0RDLFFBQVE7UUFDVjtJQUNGO0lBRUEsTUFBTUksVUFBVSxNQUFNZix3REFBYyxDQUFDSyxVQUFVTyxLQUFLUCxRQUFRO0lBQzVELElBQUksQ0FBQ1UsU0FBUztRQUNaLE9BQU8sSUFBSVIsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBbUIsSUFBSTtZQUNqRUMsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxNQUFNTSxRQUFRaEIsd0RBQVEsQ0FDcEI7UUFBRWtCLElBQUlQLEtBQUtPLEVBQUU7UUFBRWYsT0FBT1EsS0FBS1IsS0FBSztRQUFFZ0IsTUFBTVIsS0FBS1EsSUFBSTtJQUFDLEdBQ2xEQyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsRUFDM0I7UUFBRUMsV0FBVztJQUFNO0lBR3JCLE9BQU9qQixTQUFTRCxJQUFJLENBQUM7UUFBRVc7SUFBTTtBQUMvQiIsInNvdXJjZXMiOlsiRTpcXDEwLTA0LTI1XFxEZXNrdG9wXFxOYW1hblxcRXh0cmEgU2tpbGxzXFxTb2NpZXRpZXMgVGFza3NcXEUtQ2VsbFxcRWNlbGwgU3RhcnR1cFxcR3JhZGx5ZnRcXGFwcFxcYXBpXFx0b2tlblxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJNaXNzaW5nIGNyZWRlbnRpYWxzXCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9KSwge1xyXG4gICAgICBzdGF0dXM6IDQwMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICBpZiAoIWlzVmFsaWQpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJJbnZhbGlkIHBhc3N3b3JkXCIgfSksIHtcclxuICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH0sXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgICB7IGV4cGlyZXNJbjogXCIyNGhcIiB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyB0b2tlbiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiYmNyeXB0Iiwiand0IiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsInJvbGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiZXhwaXJlc0luIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/token/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_token_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/token/route.js */ \"(rsc)/./app/api/token/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/token/route\",\n        pathname: \"/api/token\",\n        filename: \"route\",\n        bundlePath: \"app/api/token/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\token\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_token_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0b2tlbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9rZW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2tlbiUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUU7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXHRva2VuXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90b2tlbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Rva2VuXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90b2tlbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXHRva2VuXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();