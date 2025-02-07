import { Car as CarType } from "@/types/Car";

export default async function Car({ car }: {car: CarType}) {
  return (
    <div className="relative mx-auto mt-10">
      <p className="p-2 text-gray-200">{car.Make_Name}</p>
      <p className="p-2 text-gray-200">{car.Model_Name}</p>
    </div>
  )
}