export type Car = {
  id: string;
  link: Link;
  title: string;
  brand: string;
  vehicleType: CarType;
};

export type CarFilterOptions = CarType | "ALL";

type Link = {
  href: string;
  title: string;
};

type CarType = "PB" | "SU";
