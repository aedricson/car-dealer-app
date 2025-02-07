import { MakesResponse } from "@/types/MakesResponse";

export async function getMakes(): Promise<MakesResponse> {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch makes");
  }

  return res.json();
}