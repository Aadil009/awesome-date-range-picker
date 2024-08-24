import { useState } from 'react';

export const useDateRange = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return { startDate, endDate, setStartDate, setEndDate };
};
