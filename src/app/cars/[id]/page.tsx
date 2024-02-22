import { notFound } from "next/navigation";
import data from "../../data.json";

type Props = {
  params: {
    id: string;
  };
};

export default function CarDetail({ params }: Props) {
  const car = data.cars.find(
    (car) => car.link.href.replace("/cars/", "") === params.id
  );

  if (!car) return notFound();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Car Detail</h1>
      <p className="text-xl">{car?.title}</p>
    </div>
  );
}
