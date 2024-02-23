import data from "./data.json";

export type Car = (typeof data.cars)[number] & { vehicleType: CarType };

export type CarType = "PB" | "SU";

export type CarFilter = CarType | "ALL";
