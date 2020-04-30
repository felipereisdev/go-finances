import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (date: Date): string => {
  const utcDate = zonedTimeToUtc(date, 'Europe/Lisbon');

  return format(utcDate, 'dd/MM/yyyy');
};

export default formatDate;
