import useFormat from '~/hooks/useFormat.tsx';
import { OrderRowProps } from '~/components/Table/OrderRow/types.ts';
import { getStatusColor } from '~/components/Utils/helpers.tsx';

export default function OrderRow({ order }: OrderRowProps) {
  const { formatDateTime, formatDate, formatPrice } = useFormat();

  return (
    <tr className="odd:bg-[#F5F5F5] even:bg-white">
      <td className="py-[10px] pl-[24px]">
        <div className="font-test-regular flex justify-start text-[14px]">
          {order.orderNumber}
        </div>
      </td>
      <td className="py-[10px] pl-[24px]">
        <div className="font-test-regular flex justify-start text-[14px]">
          {formatDateTime(order.createdAt)}
        </div>
      </td>
      <td className="py-[10px] pl-[24px]">
        <div className="font-test-regular flex justify-start text-[14px]">
          {formatDate(order.dueDate)}
        </div>
      </td>
      <td className="py-[10px] pl-[24px]">
        <div className="font-test-regular flex justify-end text-[14px]">
          {formatPrice(order.total)}
        </div>
      </td>
      <td className="py-[10px] pr-[24px] pl-[24px]">
        <div
          className={`font-test-Bold flex items-center justify-end text-[14px] ${getStatusColor(order)}`}
        >
          {order.status}
        </div>
      </td>
    </tr>
  );
}
