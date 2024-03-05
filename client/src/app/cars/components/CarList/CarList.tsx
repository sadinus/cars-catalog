import { Car, CarType } from "../../../types";
import { CarCard } from "../CarCard";

type Props = {
  cars: Car[];
  carType?: CarType;
};

export const CarList = ({ cars, carType }: Props) => {
  const filteredCars = carType
    ? cars.filter((car) => car.vehicleType === carType)
    : cars;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8">
      {filteredCars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
};
