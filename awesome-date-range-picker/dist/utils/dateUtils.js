"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearRange = exports.getMonthNames = exports.getDaysInMonth = void 0;
// src/utils/dateUtils.ts
var getDaysInMonth = function (year, month) {
    return new Date(year, month + 1, 0).getDate();
};
exports.getDaysInMonth = getDaysInMonth;
var getMonthNames = function () {
    return [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
};
exports.getMonthNames = getMonthNames;
var getYearRange = function (start, end) {
    var years = [];
    for (var year = start; year <= end; year++) {
        years.push(year);
    }
    return years;
};
exports.getYearRange = getYearRange;
