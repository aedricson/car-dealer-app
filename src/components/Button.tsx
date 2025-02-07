import { DropdownItem } from "@/types/DropdownItem";
import Link from "next/link";

interface Props {
  make: DropdownItem,
  year: DropdownItem
}

export const Button: React.FC<Props> = ({ make, year }) => {
  return (
    <div className="relative w-64 mx-auto mt-10">
      <Link
        href={`/result/${make.id}/${year.id}`}
        className={`mt-4 px-6 py-2 bg-blue-600 text-white rounded-md`}
      >
        Next
      </Link>
    </div>
  );
}
