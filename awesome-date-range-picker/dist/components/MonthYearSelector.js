"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/MonthYearSelector.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var picker_1 = require("@react-native-picker/picker");
var dateUtils_1 = require("../utils/dateUtils");
var DateRangePickerStyles_1 = __importDefault(require("../styles/DateRangePickerStyles"));
var MonthYearSelector = function (_a) {
    var selectedMonth = _a.selectedMonth, selectedYear = _a.selectedYear, onMonthChange = _a.onMonthChange, onYearChange = _a.onYearChange, onClose = _a.onClose;
    var months = (0, dateUtils_1.getMonthNames)();
    var years = (0, dateUtils_1.getYearRange)(1900, 2100);
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, visible: true },
        react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.modalContainer },
            react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.modalContent },
                react_1.default.createElement(picker_1.Picker, { selectedValue: selectedMonth, onValueChange: onMonthChange, style: DateRangePickerStyles_1.default.picker }, months.map(function (month, index) { return (react_1.default.createElement(picker_1.Picker.Item, { key: index, label: month, value: index })); })),
                react_1.default.createElement(picker_1.Picker, { selectedValue: selectedYear, onValueChange: onYearChange, style: DateRangePickerStyles_1.default.picker }, years.map(function (year) { return (react_1.default.createElement(picker_1.Picker.Item, { key: year, label: year.toString(), value: year })); })),
                react_1.default.createElement(react_native_1.Button, { title: "Close", onPress: onClose })))));
};
exports.default = MonthYearSelector;
