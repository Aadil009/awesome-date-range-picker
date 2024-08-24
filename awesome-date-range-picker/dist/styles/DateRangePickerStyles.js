"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/styles/DateRangePickerStyles.ts
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    toText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    calendarContainer: {
        marginTop: 20,
    },
    calendarHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    calendarDaysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    calendarDay: {
        width: '14.28%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDay: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    calendarDayText: {
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: 20,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        maxHeight: '80%',
    },
    picker: {
        height: 200,
        width: '100%',
    },
});
exports.default = styles;
