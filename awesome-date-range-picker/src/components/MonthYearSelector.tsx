import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getDaysInMonth, getMonthNames, getYearRange } from '../utils/dateUtils';
import styles from '../styles/DateRangePickerStyles';

interface MonthYearSelectorProps {
  selectedMonth: number;
  selectedYear: number;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onClose: () => void;
}

const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({ selectedMonth, selectedYear, onMonthChange, onYearChange, onClose }) => {
  const months = getMonthNames();
  const years = getYearRange(1900, 2100);

  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Picker selectedValue={selectedMonth} onValueChange={onMonthChange} style={styles.picker}>
            {months.map((month, index) => (
              <Picker.Item key={index} label={month} value={index} />
            ))}
          </Picker>
          <Picker selectedValue={selectedYear} onValueChange={onYearChange} style={styles.picker}>
            {years.map(year => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default MonthYearSelector;
