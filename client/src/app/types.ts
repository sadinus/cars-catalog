export type Car = {
  id: string;
  link: Link;
  title: string;
  brand: string;
  vehicleType: CarType;
};

export type Link = {
  href: string;
  title: string;
};

export type CarType = "PB" | "SU";

export type CarFilterOptions = CarType | "ALL";
