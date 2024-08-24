"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateRange = void 0;
// src/hooks/useDateRange.ts
var react_1 = require("react");
var useDateRange = function () {
    var _a = (0, react_1.useState)(null), startDate = _a[0], setStartDate = _a[1];
    var _b = (0, react_1.useState)(null), endDate = _b[0], setEndDate = _b[1];
    return { startDate: startDate, endDate: endDate, setStartDate: setStartDate, setEndDate: setEndDate };
};
exports.useDateRange = useDateRange;
