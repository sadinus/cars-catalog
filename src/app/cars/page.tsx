"use client";

import CarList from "./CarList";
import data from "../data.json";
import { ChangeEvent, useState } from "react";
import { CarType } from "../types";

export default function Home() {
  const [carTypeFilter, setCarTypeFilter] = useState<CarType>("ALL");

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCarTypeFilter(event?.target?.value as CarType);
  };

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Cars</h1>
      <select
        className="border p-2 rounded-md"
        value={carTypeFilter}
        onChange={handleFilterChange}
      >
        <option value="ALL">All</option>
        <option value="PB">Petrol</option>
        <option value="SU">Sports Utility</option>
      </select>
      <CarList cars={data.cars} carType={carTypeFilter} />
    </main>
  );
}
