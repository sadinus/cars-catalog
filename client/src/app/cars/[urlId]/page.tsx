import { notFound } from "next/navigation";
import { getCar, getCars } from "src/api/cars";

type Props = {
  params: {
    urlId: string;
  };
};

export async function generateStaticParams() {
  const cars = await getCars();
  const result = cars.map(({ urlId }) => {
    return { urlId };
  });
  return result;
}

export default async function CarDetail({ params }: Props) {
  const car = await getCar(params.urlId);

  if (!car) return notFound();

  return (
    <div className="container mx-auto px-6 md:px-2">
      <h1 className="text-3xl font-bold my-4">Car Detail</h1>
      <p className="text-xl">{car?.title}</p>
    </div>
  );
}
