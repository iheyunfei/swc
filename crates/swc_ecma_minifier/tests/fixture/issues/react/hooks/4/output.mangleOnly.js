"use strict";
var a = __webpack_require__(86677);
var b = __webpack_require__(45205);
var c = __webpack_require__(502);
var d = __webpack_require__(78869);
var e = __webpack_require__(16966);
var f = __webpack_require__(96236);
var g = __webpack_require__(70326);
export function useProjectBranches(h, i) {
    var l = (0, e.LP)();
    var j = (0, c.ZP)(), a = j.team;
    var k = a === null || a === void 0 ? void 0 : a.id;
    return (0, b.ZP)(h ? "".concat(f.Ms, "/git-branches").concat((0, g.c)({
        projectId: h,
        teamId: k
    })) : "", function(a) {
        return (0, d.Z)(a, l, {
            throwOnHTTPError: true
        });
    }, i);
}