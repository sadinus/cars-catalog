import Link from "next/link";
import Image from "next/image";
import { Car } from "../../../types";
import carImage from "./carimage.jpg";

type Props = {
  car: Car;
};

export const CarCard = ({ car }: Props) => {
  return (
    <div className="max-w rounded overflow-hidden shadow-lg relative">
      <Image
        src={carImage}
        priority
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
          className="absolute bottom-0 right-0 mb-4 mr-6 mt-8"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};