export type CarType = "PB" | "SU";

export type ApiCar = {
  id: string;
  link: {
    href: `/cars/${string}`;
    title: string;
  };
  title: string;
  brand: string;
  vehicleType: CarType;
};

export type Car = ApiCar & { urlId: string };
