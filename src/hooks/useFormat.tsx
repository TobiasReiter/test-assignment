import { format } from 'date-fns';

export default function useFormat() {
  const formatDateTime = (time: string = '') => {
    return format(new Date(time), 'MMM dd, yyyy, HH:mm');
  };

  const formatDate = (time: string = '') => {
    return format(new Date(time), 'MMM dd,yyyy');
  };

  const formatPrice = (amount: number, locale: string = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  return { formatDateTime, formatDate, formatPrice };
}
