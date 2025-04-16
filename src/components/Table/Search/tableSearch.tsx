export default function TableSearch({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) {
  return (
    <div className="flex max-h-[39px] w-full max-w-[734px] rounded border border-[#EDEDED] px-[24px] py-[10px]">
      <input
        name="search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="font-test-regular w-full flex-grow-1 items-start text-[14px] text-[#ABABAB] outline-0"
        placeholder="Search by order number"
      />
    </div>
  );
}
