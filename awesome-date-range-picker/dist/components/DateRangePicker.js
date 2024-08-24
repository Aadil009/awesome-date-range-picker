"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/DateRangePicker.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Calendar_1 = __importDefault(require("./Calendar"));
var DateInput_1 = __importDefault(require("./DateInput"));
var useDateRange_1 = require("../hooks/useDateRange");
var DateRangePickerStyles_1 = __importDefault(require("../styles/DateRangePickerStyles"));
var DateRangePicker = function () {
    var _a = (0, useDateRange_1.useDateRange)(), startDate = _a.startDate, endDate = _a.endDate, setStartDate = _a.setStartDate, setEndDate = _a.setEndDate;
    var handleSubmit = function () {
        if (startDate && endDate) {
            console.log('Selected Date Range:', startDate.toDateString(), 'to', endDate.toDateString());
        }
        else {
            console.log('Please select a valid date range.');
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.container },
        react_1.default.createElement(react_native_1.Text, { style: DateRangePickerStyles_1.default.header }, "Select Date Range"),
        react_1.default.createElement(react_native_1.View, { style: DateRangePickerStyles_1.default.inputContainer },
            react_1.default.createElement(DateInput_1.default, { date: startDate, setDate: setStartDate }),
            react_1.default.createElement(react_native_1.Text, { style: DateRangePickerStyles_1.default.toText }, "to"),
            react_1.default.createElement(DateInput_1.default, { date: endDate, setDate: setEndDate })),
        react_1.default.createElement(Calendar_1.default, { startDate: startDate, endDate: endDate, setStartDate: setStartDate, setEndDate: setEndDate }),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: DateRangePickerStyles_1.default.submitButton, onPress: handleSubmit },
            react_1.default.createElement(react_native_1.Text, { style: DateRangePickerStyles_1.default.submitText }, "Submit"))));
};
exports.default = DateRangePicker;
