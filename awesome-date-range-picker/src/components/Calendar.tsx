import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getDaysInMonth, getMonthNames, getYearRange } from '../utils/dateUtils';
import styles from '../styles/DateRangePickerStyles';

interface CalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  minDate?: Date; 
  maxDate?: Date; 
}

const Calendar: React.FC<CalendarProps> = ({ startDate, endDate, setStartDate, setEndDate, minDate, maxDate }) => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [showMonthYearPicker, setShowMonthYearPicker] = useState<boolean>(false);

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(selectedYear, selectedMonth, day);
    if (minDate && selectedDate < minDate) return;
    if (maxDate && selectedDate > maxDate) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      if (selectedDate >= startDate) {
        setEndDate(selectedDate);
      } else {
        setStartDate(selectedDate);
      }
    }
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const months = getMonthNames();
  const years = getYearRange(1900, 2100);

  return (
    <View style={styles.calendarContainer}>
      <Text style={styles.calendarHeader}>
        {months[selectedMonth]} {selectedYear}
      </Text>
      <Button title="Select Month/Year" onPress={() => setShowMonthYearPicker(true)} />

      <Modal visible={showMonthYearPicker} transparent={true}>
        <View style={styles.modalContainer}>
          <Picker selectedValue={selectedMonth} onValueChange={handleMonthChange}>
            {months.map((month, index) => (
              <Picker.Item key={index} label={month} value={index} />
            ))}
          </Picker>
          <Picker selectedValue={selectedYear} onValueChange={handleYearChange}>
            {years.map(year => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
          <Button title="Close" onPress={() => setShowMonthYearPicker(false)} />
        </View>
      </Modal>

      <View style={styles.calendarDaysContainer}>
        {[...Array(daysInMonth)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarDay,
              (startDate && startDate.getDate() === index + 1) ||
              (endDate && endDate.getDate() === index + 1)
                ? styles.selectedDay
                : null,
            ]}
            onPress={() => handleDateSelect(index + 1)}
          >
            <Text style={styles.calendarDayText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
