"use client";
import { Car, CarFilterOptions } from "../types";
import CarList from "./components/CarList";
import { getCars } from "src/api/cars";
import { useEffect, useState } from "react";
import { CarFilter } from "./components/CarFilter";
import { useSearchParams } from "next/navigation";

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([]);

  const searchParams = useSearchParams();
  const carType = (searchParams.get("carType") as CarFilterOptions) ?? "ALL";

  useEffect(() => {
    getCars().then(setCars);
  }, []);

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Cars</h1>
      <CarFilter />
      <CarList cars={cars} carType={carType} />
    </main>
  );
}
