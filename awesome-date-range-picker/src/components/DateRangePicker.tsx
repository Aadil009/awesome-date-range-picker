import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Calendar from './Calendar';
import DateInput from './DateInput';
import { useDateRange } from '../hooks/useDateRange';
import styles from '../styles/DateRangePickerStyles';

const DateRangePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();

  const handleSubmit = () => {
    if (startDate && endDate) {
      console.log('Selected Date Range:', startDate.toDateString(), 'to', endDate.toDateString());
    } else {
      console.log('Please select a valid date range.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Date Range</Text>
      <View style={styles.inputContainer}>
        <DateInput date={startDate} setDate={setStartDate} />
        <Text style={styles.toText}>to</Text>
        <DateInput date={endDate} setDate={setEndDate} />
      </View>
      <Calendar startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateRangePicker;
