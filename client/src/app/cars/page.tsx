import { CarFilterOptions } from "../types";
import CarList from "./components/CarList";
import { getCars } from "src/api/cars";
import { CarFilter } from "./components/CarFilter";

type Props = {
  searchParams: { carType: CarFilterOptions | undefined };
};

export default async function Cars({ searchParams }: Props) {
  const cars = await getCars();
  const carType = searchParams.carType;

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Cars</h1>
      <CarFilter />
      <CarList cars={cars} carType={carType} />
    </main>
  );
}
