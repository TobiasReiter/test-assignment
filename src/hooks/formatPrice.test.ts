import { describe, it, expect } from 'vitest';
import useFormat from './useFormat.tsx';

describe('formatPrice', () => {
  const { formatPrice } = useFormat();

  it('formats numbers with 5 or more integer digits using grouping and period as a decimal separator', () => {
    const result = formatPrice(10223.97);
    expect(result).toBe('€10,223.97');
  });

  it('formats numbers with less than 5 integer digits using no grouping and a comma as a decimal separator', () => {
    const result = formatPrice(3920.28);
    expect(result).toBe('€3920,28');
  });

  it('formats whole numbers with two decimals using a period as a decimal separator', () => {
    const result = formatPrice(6732);
    expect(result).toBe('€6732.00');
  });
});
