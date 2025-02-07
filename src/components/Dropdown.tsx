"use client";

import { useState, useEffect, useRef } from "react";
import { DropdownItem } from "@/types/DropdownItem";

interface Props {
  items: DropdownItem[],
  title: string,
  onSelect: (value: DropdownItem) => void
}

export const Dropdown: React.FC<Props> = ({ items = [], title, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleChange(value: DropdownItem) {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-64 mx-auto mt-10">
      <button
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={handleOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue?.name || title}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-y-auto">
            {items.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
                onClick={() => handleChange(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};