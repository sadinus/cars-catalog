import { SkeletonLine } from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-6 md:px-2">
      <h1 className="text-3xl font-bold my-4">Car Detail</h1>
      <SkeletonLine />
    </div>
  );
}
