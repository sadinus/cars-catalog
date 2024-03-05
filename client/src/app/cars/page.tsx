import { CarList } from "./components/CarList";
import { getCars } from "src/api/cars";
import { CarFilter } from "./components/CarFilter";
import { CarType } from "../types";
import { Suspense } from "react";
import { SkeletonCard, SkeletonList } from "./components/Skeleton";

type Props = {
  searchParams: { carType?: CarType };
};

export default async function Cars({ searchParams }: Props) {
  const cars = await getCars();
  const carType = searchParams.carType;

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold px-6 md:px-0 my-4">Cars</h1>
      <CarFilter />
      <Suspense
        fallback={
          <SkeletonList amount={10}>
            <SkeletonCard />
          </SkeletonList>
        }
      >
        <CarList cars={cars} carType={carType} />
      </Suspense>
    </main>
  );
}
