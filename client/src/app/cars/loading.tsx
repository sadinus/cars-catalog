import { CarFilter } from "./components/CarFilter";
import { SkeletonCard, SkeletonList } from "./components/Skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Cars</h1>
      <CarFilter />
      <SkeletonList amount={10}>
        <SkeletonCard />
      </SkeletonList>
    </main>
  );
}
