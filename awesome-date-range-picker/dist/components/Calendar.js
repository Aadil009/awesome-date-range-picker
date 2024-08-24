"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Calendar.tsx
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var picker_1 = require("@react-native-picker/picker");
var dateUtils_1 = require("../utils/dateUtils");
var DateRangePickerStyles_1 = __importDefault(require("../styles/DateRangePickerStyles"));
var Calendar = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, setStartDate = _a.setStartDate, setEndDate = _a.setEndDate, minDate = _a.minDate, maxDate = _a.maxDate;
    var _b = (0, react_1.useState)(new Date().getFullYear()), selectedYear = _b[0], setSelectedYear = _b[1];
    var _c = (0, react_1.useState)(new Date().getMonth()), selectedMonth = _c[0], setSelectedMonth = _c[1];
    var _d = (0, react_1.useState)(false), showMonthYearPicker = _d[0], setShowMonthYearPicker = _d[1];
    var daysInMonth = (0, dateUtils_1.getDaysInMonth)(selectedYear, selectedMonth);
    var handleDateSelect = function (day) {
        var selectedDate = new Date(selectedYear, selectedMonth, day);
        if (minDate && selectedDate < minDate)
            return;
        if (maxDate && selectedDate > maxDate)
            return;
        if (!startDate || (startDate && endDate)) {
            setStartDate(selectedDate);
            setEndDate(null);
        }
        else {
            if (selectedDate >= startDate) {
                setEndDate(selectedDate);
            }
            else {
                setStartDate(selectedDate);
            }
        }
    };
    var handleMonthChange = function (month) {
        setSelectedMonth(month);
    };
    var handleYearChange = function (year) {
        setSelectedYear(year);
    };
    var months = (0, dateUtils_1.getMonthNames)();
    var years = (0, dateUtils_1.getYearRange)(1900, 2100); // You can adjust the range as needed
    return (react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.calendarContainer },
        react_1.default.createElement(react_native_1.Text, { style: DateRangePickerStyles_1.default.calendarHeader },
            months[selectedMonth],
            " ",
            selectedYear),
        react_1.default.createElement(react_native_1.Button, { title: "Select Month/Year", onPress: function () { return setShowMonthYearPicker(true); } }),
        react_1.default.createElement(react_native_1.Modal, { visible: showMonthYearPicker, transparent: true },
            react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.modalContainer },
                react_1.default.createElement(picker_1.Picker, { selectedValue: selectedMonth, onValueChange: handleMonthChange }, months.map(function (month, index) { return (react_1.default.createElement(picker_1.Picker.Item, { key: index, label: month, value: index })); })),
                react_1.default.createElement(picker_1.Picker, { selectedValue: selectedYear, onValueChange: handleYearChange }, years.map(function (year) { return (react_1.default.createElement(picker_1.Picker.Item, { key: year, label: year.toString(), value: year })); })),
                react_1.default.createElement(react_native_1.Button, { title: "Close", onPress: function () { return setShowMonthYearPicker(false); } }))),
        react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.calendarDaysContainer }, __spreadArray([], Array(daysInMonth), true).map(function (_, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: [
                DateRangePickerStyles_1.default.calendarDay,
                (startDate && startDate.getDate() === index + 1) ||
                    (endDate && endDate.getDate() === index + 1)
                    ? DateRangePickerStyles_1.default.selectedDay
                    : null,
            ], onPress: function () { return handleDateSelect(index + 1); } },
            react_1.default.createElement(react_native_1.Text, { style: DateRangePickerStyles_1.default.calendarDayText }, index + 1))); }))));
};
exports.default = Calendar;
