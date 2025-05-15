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
exports.id = "app/api/events/register/route";
exports.ids = ["app/api/events/register/route"];
exports.modules = {

/***/ "(rsc)/./app/api/events/register/route.js":
/*!******************************************!*\
  !*** ./app/api/events/register/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(rsc)/./app/utils/db.js\");\n\n\n\nasync function POST(req) {\n    // ✅ Step 1: Read token from cookie header\n    const cookieHeader = req.headers.get(\"cookie\") || \"\";\n    const parsedCookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookieHeader);\n    const tokenRaw = parsedCookies[\"gradlyft_token\"];\n    if (!tokenRaw) return new Response(\"Unauthorized\", {\n        status: 401\n    });\n    // ✅ Step 2: Decode and validate token\n    let token;\n    try {\n        token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(tokenRaw, process.env.NEXTAUTH_SECRET);\n    } catch  {\n        return new Response(\"Invalid token\", {\n            status: 403\n        });\n    }\n    console.log(token);\n    // ✅ Step 3: Ensure student role\n    if (token.role !== \"STUDENT\") return new Response(\"Forbidden\", {\n        status: 403\n    });\n    // ✅ Step 4: Get student profile\n    const student = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.studentProfile.findUnique({\n        where: {\n            userId: token.id\n        }\n    });\n    if (!student) return new Response(\"Student profile not found\", {\n        status: 404\n    });\n    // ✅ Step 5: Parse event ID from request body\n    const { eventId } = await req.json();\n    // ✅ Step 6: Check event exists\n    const event = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.event.findUnique({\n        where: {\n            id: eventId\n        }\n    });\n    if (!event) return new Response(\"Event not found\", {\n        status: 404\n    });\n    // ✅ Step 7: Prevent duplicate registration\n    const already = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.eventRegistration.findFirst({\n        where: {\n            studentId: student.id,\n            eventId\n        }\n    });\n    if (already) return new Response(\"Already registered\", {\n        status: 409\n    });\n    // ✅ Step 8: Register student for event\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__.prisma.eventRegistration.create({\n        data: {\n            studentId: student.id,\n            eventId\n        }\n    });\n    return Response.json({\n        message: \"Registered successfully\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2V2ZW50cy9yZWdpc3Rlci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNBO0FBQ1k7QUFFcEMsZUFBZUcsS0FBS0MsR0FBRztJQUM1QiwwQ0FBMEM7SUFDMUMsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYTtJQUNsRCxNQUFNQyxnQkFBZ0JSLDZDQUFLQSxDQUFDSztJQUM1QixNQUFNSSxXQUFXRCxhQUFhLENBQUMsaUJBQWlCO0lBQ2hELElBQUksQ0FBQ0MsVUFBVSxPQUFPLElBQUlDLFNBQVMsZ0JBQWdCO1FBQUVDLFFBQVE7SUFBSTtJQUVqRSxzQ0FBc0M7SUFDdEMsSUFBSUM7SUFDSixJQUFJO1FBQ0ZBLFFBQVFYLDBEQUFVLENBQUNRLFVBQVVLLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUMxRCxFQUFFLE9BQU07UUFDTixPQUFPLElBQUlOLFNBQVMsaUJBQWlCO1lBQUVDLFFBQVE7UUFBSTtJQUNyRDtJQUNBTSxRQUFRQyxHQUFHLENBQUNOO0lBRVosZ0NBQWdDO0lBQ2hDLElBQUlBLE1BQU1PLElBQUksS0FBSyxXQUFXLE9BQU8sSUFBSVQsU0FBUyxhQUFhO1FBQUVDLFFBQVE7SUFBSTtJQUU3RSxnQ0FBZ0M7SUFDaEMsTUFBTVMsVUFBVSxNQUFNbEIsNkNBQU1BLENBQUNtQixjQUFjLENBQUNDLFVBQVUsQ0FBQztRQUNyREMsT0FBTztZQUFFQyxRQUFRWixNQUFNYSxFQUFFO1FBQUM7SUFDNUI7SUFDQSxJQUFJLENBQUNMLFNBQVMsT0FBTyxJQUFJVixTQUFTLDZCQUE2QjtRQUFFQyxRQUFRO0lBQUk7SUFFN0UsNkNBQTZDO0lBQzdDLE1BQU0sRUFBRWUsT0FBTyxFQUFFLEdBQUcsTUFBTXRCLElBQUl1QixJQUFJO0lBRWxDLCtCQUErQjtJQUMvQixNQUFNQyxRQUFRLE1BQU0xQiw2Q0FBTUEsQ0FBQzBCLEtBQUssQ0FBQ04sVUFBVSxDQUFDO1FBQUVDLE9BQU87WUFBRUUsSUFBSUM7UUFBUTtJQUFFO0lBQ3JFLElBQUksQ0FBQ0UsT0FBTyxPQUFPLElBQUlsQixTQUFTLG1CQUFtQjtRQUFFQyxRQUFRO0lBQUk7SUFFakUsMkNBQTJDO0lBQzNDLE1BQU1rQixVQUFVLE1BQU0zQiw2Q0FBTUEsQ0FBQzRCLGlCQUFpQixDQUFDQyxTQUFTLENBQUM7UUFDdkRSLE9BQU87WUFBRVMsV0FBV1osUUFBUUssRUFBRTtZQUFFQztRQUFRO0lBQzFDO0lBQ0EsSUFBSUcsU0FBUyxPQUFPLElBQUluQixTQUFTLHNCQUFzQjtRQUFFQyxRQUFRO0lBQUk7SUFFckUsdUNBQXVDO0lBQ3ZDLE1BQU1ULDZDQUFNQSxDQUFDNEIsaUJBQWlCLENBQUNHLE1BQU0sQ0FBQztRQUNwQ0MsTUFBTTtZQUFFRixXQUFXWixRQUFRSyxFQUFFO1lBQUVDO1FBQVE7SUFDekM7SUFFQSxPQUFPaEIsU0FBU2lCLElBQUksQ0FBQztRQUFFUSxTQUFTO0lBQTBCO0FBQzVEIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFxhcGlcXGV2ZW50c1xccmVnaXN0ZXJcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAvLyDinIUgU3RlcCAxOiBSZWFkIHRva2VuIGZyb20gY29va2llIGhlYWRlclxyXG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSB8fCBcIlwiO1xyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBwYXJzZShjb29raWVIZWFkZXIpO1xyXG4gIGNvbnN0IHRva2VuUmF3ID0gcGFyc2VkQ29va2llc1tcImdyYWRseWZ0X3Rva2VuXCJdO1xyXG4gIGlmICghdG9rZW5SYXcpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgLy8g4pyFIFN0ZXAgMjogRGVjb2RlIGFuZCB2YWxpZGF0ZSB0b2tlblxyXG4gIGxldCB0b2tlbjtcclxuICB0cnkge1xyXG4gICAgdG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuUmF3LCBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkludmFsaWQgdG9rZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuICB9XHJcbiAgY29uc29sZS5sb2codG9rZW4pXHJcblxyXG4gIC8vIOKchSBTdGVwIDM6IEVuc3VyZSBzdHVkZW50IHJvbGVcclxuICBpZiAodG9rZW4ucm9sZSAhPT0gXCJTVFVERU5UXCIpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcclxuXHJcbiAgLy8g4pyFIFN0ZXAgNDogR2V0IHN0dWRlbnQgcHJvZmlsZVxyXG4gIGNvbnN0IHN0dWRlbnQgPSBhd2FpdCBwcmlzbWEuc3R1ZGVudFByb2ZpbGUuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyB1c2VySWQ6IHRva2VuLmlkIH1cclxuICB9KTtcclxuICBpZiAoIXN0dWRlbnQpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJTdHVkZW50IHByb2ZpbGUgbm90IGZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcblxyXG4gIC8vIOKchSBTdGVwIDU6IFBhcnNlIGV2ZW50IElEIGZyb20gcmVxdWVzdCBib2R5XHJcbiAgY29uc3QgeyBldmVudElkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAvLyDinIUgU3RlcCA2OiBDaGVjayBldmVudCBleGlzdHNcclxuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5ldmVudC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGV2ZW50SWQgfSB9KTtcclxuICBpZiAoIWV2ZW50KSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRXZlbnQgbm90IGZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XHJcblxyXG4gIC8vIOKchSBTdGVwIDc6IFByZXZlbnQgZHVwbGljYXRlIHJlZ2lzdHJhdGlvblxyXG4gIGNvbnN0IGFscmVhZHkgPSBhd2FpdCBwcmlzbWEuZXZlbnRSZWdpc3RyYXRpb24uZmluZEZpcnN0KHtcclxuICAgIHdoZXJlOiB7IHN0dWRlbnRJZDogc3R1ZGVudC5pZCwgZXZlbnRJZCB9XHJcbiAgfSk7XHJcbiAgaWYgKGFscmVhZHkpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJBbHJlYWR5IHJlZ2lzdGVyZWRcIiwgeyBzdGF0dXM6IDQwOSB9KTtcclxuXHJcbiAgLy8g4pyFIFN0ZXAgODogUmVnaXN0ZXIgc3R1ZGVudCBmb3IgZXZlbnRcclxuICBhd2FpdCBwcmlzbWEuZXZlbnRSZWdpc3RyYXRpb24uY3JlYXRlKHtcclxuICAgIGRhdGE6IHsgc3R1ZGVudElkOiBzdHVkZW50LmlkLCBldmVudElkIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInBhcnNlIiwiand0IiwicHJpc21hIiwiUE9TVCIsInJlcSIsImNvb2tpZUhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJwYXJzZWRDb29raWVzIiwidG9rZW5SYXciLCJSZXNwb25zZSIsInN0YXR1cyIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImNvbnNvbGUiLCJsb2ciLCJyb2xlIiwic3R1ZGVudCIsInN0dWRlbnRQcm9maWxlIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcklkIiwiaWQiLCJldmVudElkIiwianNvbiIsImV2ZW50IiwiYWxyZWFkeSIsImV2ZW50UmVnaXN0cmF0aW9uIiwiZmluZEZpcnN0Iiwic3R1ZGVudElkIiwiY3JlYXRlIiwiZGF0YSIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/events/register/route.js\n");

/***/ }),

/***/ "(rsc)/./app/utils/db.js":
/*!*************************!*\
  !*** ./app/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNDLFdBQVdELE1BQU0sSUFBSSxJQUFJRCx3REFBWUEsR0FBRztBQUU5RCxJQUFJRyxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJFOlxcMTAtMDQtMjVcXERlc2t0b3BcXE5hbWFuXFxFeHRyYSBTa2lsbHNcXFNvY2lldGllcyBUYXNrc1xcRS1DZWxsXFxFY2VsbCBTdGFydHVwXFxHcmFkbHlmdFxcYXBwXFx1dGlsc1xcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/utils/db.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Fregister%2Froute&page=%2Fapi%2Fevents%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Fregister%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Fregister%2Froute&page=%2Fapi%2Fevents%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Fregister%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_events_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/events/register/route.js */ \"(rsc)/./app/api/events/register/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/events/register/route\",\n        pathname: \"/api/events/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/events/register/route\"\n    },\n    resolvedPagePath: \"E:\\\\10-04-25\\\\Desktop\\\\Naman\\\\Extra Skills\\\\Societies Tasks\\\\E-Cell\\\\Ecell Startup\\\\Gradlyft\\\\app\\\\api\\\\events\\\\register\\\\route.js\",\n    nextConfigOutput,\n    userland: E_10_04_25_Desktop_Naman_Extra_Skills_Societies_Tasks_E_Cell_Ecell_Startup_Gradlyft_app_api_events_register_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZldmVudHMlMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZXZlbnRzJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZldmVudHMlMkZyZWdpc3RlciUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDMTAtMDQtMjUlNUNEZXNrdG9wJTVDTmFtYW4lNUNFeHRyYSUyMFNraWxscyU1Q1NvY2lldGllcyUyMFRhc2tzJTVDRS1DZWxsJTVDRWNlbGwlMjBTdGFydHVwJTVDR3JhZGx5ZnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUMxMC0wNC0yNSU1Q0Rlc2t0b3AlNUNOYW1hbiU1Q0V4dHJhJTIwU2tpbGxzJTVDU29jaWV0aWVzJTIwVGFza3MlNUNFLUNlbGwlNUNFY2VsbCUyMFN0YXJ0dXAlNUNHcmFkbHlmdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0Y7QUFDL0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXDEwLTA0LTI1XFxcXERlc2t0b3BcXFxcTmFtYW5cXFxcRXh0cmEgU2tpbGxzXFxcXFNvY2lldGllcyBUYXNrc1xcXFxFLUNlbGxcXFxcRWNlbGwgU3RhcnR1cFxcXFxHcmFkbHlmdFxcXFxhcHBcXFxcYXBpXFxcXGV2ZW50c1xcXFxyZWdpc3RlclxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZXZlbnRzL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZXZlbnRzL3JlZ2lzdGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ldmVudHMvcmVnaXN0ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFwxMC0wNC0yNVxcXFxEZXNrdG9wXFxcXE5hbWFuXFxcXEV4dHJhIFNraWxsc1xcXFxTb2NpZXRpZXMgVGFza3NcXFxcRS1DZWxsXFxcXEVjZWxsIFN0YXJ0dXBcXFxcR3JhZGx5ZnRcXFxcYXBwXFxcXGFwaVxcXFxldmVudHNcXFxccmVnaXN0ZXJcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Fregister%2Froute&page=%2Fapi%2Fevents%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Fregister%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/cookie","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fevents%2Fregister%2Froute&page=%2Fapi%2Fevents%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Fregister%2Froute.js&appDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5C10-04-25%5CDesktop%5CNaman%5CExtra%20Skills%5CSocieties%20Tasks%5CE-Cell%5CEcell%20Startup%5CGradlyft&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();