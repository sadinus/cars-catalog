export type Car = {
  id: string;
  link: Link;
  title: string;
  brand: string;
  vehicleType: CarType;
};

type Link = {
  href: string;
  title: string;
};

export type CarType = "PB" | "SU";
