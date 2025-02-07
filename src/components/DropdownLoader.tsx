import { getMakes } from "@/lib/getMakes";
import { DropdownItem, DropdownItems } from "@/types/DropdownItem";
import { Dropdown } from "./Dropdown";
import { getYears } from "@/lib/getYears";
import { useEffect, useState } from "react";

interface Props {
  type: DropdownItems,
  onSelect: (value: DropdownItem) => void
};

export function DropdownLoader({ type, onSelect }: Props) {
  const [items, setItems] = useState<DropdownItem[] | []>([]);

  async function prepareMakes() {
    const makes = await getMakes();
    const preparedMakes = makes.Results.map(make => ({ id: make.MakeId, name: make.MakeName }));

    setItems(preparedMakes);
  }

  useEffect(() => {
    if (type === "years") {
      const years = getYears();
      setItems(years);
    }

    if (type === "makes") {
      prepareMakes();
    }
  }, [type]);

  return <Dropdown items={items} title="Select year" onSelect={onSelect} />;
}