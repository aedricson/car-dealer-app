import { Loading } from "@/components/Loading";
import Car from "@/components/Cars";
import { getCars } from "@/lib/getCars";
import { getYears } from "@/lib/getYears";
import { Suspense } from "react";

export async function generateStaticParams() {
  const makesResponse = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
  const makesData = await makesResponse.json();
  const makes = makesData.Results;
  

  const years = getYears();

  const params = makes.flatMap((make: { MakeId: string | number }) =>
    years.map((year) => [make.MakeId.toString(), year.id.toString()])
  );

  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;
  console.log(slug);
  
  const cars = await getCars(slug[0], slug[1]);

  return (
    <Suspense fallback={<Loading />}>
      {cars.Results.map(car => <Car key={car.Make_ID} car={car} />)}
    </Suspense>
  );
}