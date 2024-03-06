import Link from "next/link";
import Image from "next/image";
import { Car } from "../../../types";
import carImage from "./carimage.jpg";

type Props = {
  car: Car;
};

export const CarCard = ({ car }: Props) => {
  return (
    <div className="max-w rounded overflow-hidden shadow-lg flex flex-col w-full">
      <div className={"relative w-full h-40"}>
        <Image
          src={carImage}
          fill
          placeholder="blur"
          priority
          alt={car.title}
          className={"object-cover"}
        />
      </div>
      <div className="px-6 py-6 pb-8 flex flex-col w-full">
        <div className="font-bold text-xl mb-2">{car.brand}</div>
        <p className="text-gray-700 text-base mb-2">{car.title}</p>
        <p className="text-gray-700 text-base mb-2">
          carType: {car.vehicleType}
        </p>
      </div>
      <div className="flex-grow" />
      <div className="flex justify-end mr-6 mb-4">
        <Link href={car.link.href}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
