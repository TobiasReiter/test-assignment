import { tableHeaderProps } from '~/components/Table/Header/types.ts';

export default function TableHeader({
  title,
  className,
  button,
}: tableHeaderProps) {
  return (
    <div
      className={`flex w-full max-w-[734px] items-center justify-between ${className}`}
    >
      <div className="font-test-SemiBold text-[36px]">{title}</div>
      <div>{button}</div>
    </div>
  );
}
