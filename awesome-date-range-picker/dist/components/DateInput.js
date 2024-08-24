"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/DateInput.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var DateInput = function (_a) {
    var date = _a.date, setDate = _a.setDate;
    return (react_1.default.createElement(react_native_1.View, { style: styles.dateInputContainer },
        react_1.default.createElement(react_native_1.TextInput, { style: styles.dateInput, value: date ? date.toDateString() : '', placeholder: "Select Date", editable: false })));
};
var styles = react_native_1.StyleSheet.create({
    dateInputContainer: {
        flex: 1,
    },
    dateInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
});
exports.default = DateInput;
