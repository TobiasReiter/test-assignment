export function getStatusColor(order: {
  dueDate: string;
  status: string;
}): string {
  const dueDate = new Date(order.dueDate);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const normalizedDueDate = new Date(dueDate);
  normalizedDueDate.setHours(0, 0, 0, 0);

  if (order.status === 'UNPAID' && normalizedDueDate < today) {
    return 'text-[#F22424]';
  }

  if (order.status === 'PAID') {
    return 'text-[#2CD540]';
  }

  if (order.status === 'UNPAID' && normalizedDueDate >= today) {
    return 'text-[#E4C93D]';
  }

  return 'text-black';
}
