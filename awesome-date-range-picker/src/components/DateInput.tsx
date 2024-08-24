import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface DateInputProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

const DateInput: React.FC<DateInputProps> = ({ date, setDate }) => {
  return (
    <View style={styles.dateInputContainer}>
      <TextInput
        style={styles.dateInput}
        value={date ? date.toDateString() : ''}
        placeholder="Select Date"
        editable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default DateInput;
