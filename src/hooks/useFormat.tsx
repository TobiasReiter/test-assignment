import { format } from 'date-fns';

export default function useFormat() {
  const formatDateTime = (time: string = '') => {
    return format(new Date(time), 'MMM dd, yyyy, HH:mm');
  };

  const formatDate = (time: string = '') => {
    return format(new Date(time), 'MMM dd,yyyy');
  };

  const formatPrice = (amount: number, locale: string = 'en-US') => {
    const integerDigitsCount = Math.floor(Math.abs(amount)).toString().length;

    if (integerDigitsCount >= 5) {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
      }).format(amount);
    } else {
      if (amount % 1 === 0) {
        return `€${amount.toFixed(2)}`;
      } else {
        return `€${amount.toFixed(2).replace('.', ',')}`;
      }
    }
  };

  return { formatDateTime, formatDate, formatPrice };
}
