import data from "./data.json";

export type Car = (typeof data.cars)[number];

export type CarType = "PB" | "SU" | "ALL";
