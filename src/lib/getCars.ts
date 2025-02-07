import { CarsResponse } from "@/types/CarsResponse";

export async function getCars(makeId: string, year: string): Promise<CarsResponse> {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch makes");
  }

  return res.json();
}