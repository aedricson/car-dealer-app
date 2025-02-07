"use client"

import { Button } from "@/components/Button";
import { DropdownLoader } from "@/components/DropdownLoader";
import { Loading } from "@/components/Loading";
import { DropdownItem } from "@/types/DropdownItem";
import { Suspense, useState } from "react";

export default function Home() {
  const [selectedMake, setSelectedMake] = useState<DropdownItem | null>(null);
  const [selectedYear, setSelectedYear] = useState<DropdownItem | null>(null);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Select a Car Make</h1>
{/* Suspense is redundant for now, should rewrite logic to handle errors and loading */}
      <Suspense fallback={<Loading />}> 
        <DropdownLoader type="makes" onSelect={setSelectedMake} />
        <DropdownLoader type="years" onSelect={setSelectedYear} />
        {selectedMake && selectedYear && <Button make={selectedMake} year={selectedYear} />}
      </Suspense>
    </main>
  );
}


