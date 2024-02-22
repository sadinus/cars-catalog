import Link from "next/link";
import Image from "next/image";
import { Car, CarType } from "../types";

type Props = {
  cars: Car[];
  carType: CarType;
};

const CarList = ({ cars, carType }: Props) => {
  const filteredCars =
    carType !== "ALL"
      ? cars.filter((car) => car.vehicleType === carType)
      : cars;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCars.map((car) => (
        <li key={car.id}>
          <Image
            src={"/carimage.jpg"}
            width={"200"}
            height={"200"}
            alt={car.title}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-xl font-semibold mb-1">{car.title}</h2>
          <p className="text-gray-600 mb-2">{car.brand}</p>
          <p className="text-gray-600">{car.vehicleType}</p>
          <Link
            href={car.link.href}
            className="text-blue-600 font-bold mt-2 block"
          >
            View Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
