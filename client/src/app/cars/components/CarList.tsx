import { Car, CarType } from "../../types";
import { CarCard } from "./CarCard";

type Props = {
  cars: Car[];
  carType?: CarType;
};

const CarList = ({ cars, carType }: Props) => {
  const filteredCars = carType
    ? cars.filter((car) => car.vehicleType === carType)
    : cars;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
};

export default CarList;
