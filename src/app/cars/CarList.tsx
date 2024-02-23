import Link from "next/link";
import Image from "next/image";
import { Car, CarFilter } from "../types";

type Props = {
  cars: Car[];
  carType: CarFilter;
};

const CarList = ({ cars, carType }: Props) => {
  const filteredCars =
    carType !== "ALL"
      ? cars.filter((car) => car.vehicleType === carType)
      : cars;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCars.map((car) => (
        <li
          key={car.id}
          className="relative max-w-sm rounded overflow-hidden shadow-lg"
        >
          <Image
            src={"/carimage.jpg"}
            width={1178}
            height={762}
            alt={car.title}
            className="w-full h-40 object-cover mb-2"
          />
          <div className="px-6 py-6 pb-8">
            <div className="font-bold text-xl mb-2">{car.brand}</div>
            <p className="text-gray-700 text-base mb-2">{car.title}</p>
            <p className="text-gray-700 text-base mb-2">
              carType: {car.vehicleType}
            </p>
            <Link
              href={car.link.href}
              className="absolute bottom-0 right-0 mb-4 mr-4 mt-8"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
