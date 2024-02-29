import { Car } from "src/app/types";
import data from "./data.json";

// data.json used only to show the demo on netlify

export async function getCars() {
  if (process.env.NODE_ENV === "production") {
    return data.cars as Car[];
  } else {
    return fetch(`${process.env.API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => data as Car[]);
  }
}

export async function getCar(id: string) {
  if (process.env.NODE_ENV === "production") {
    return data.cars.find((x) => x.link.href === `/cars/${id}`) as Car;
  } else {
    const carHref = `/cars/${id}`;

    return fetch(`${process.env.API_URL}/cars?link.href=${carHref}`)
      .then((res) => res.json())
      .then((data) => data[0] as Car);
  }
}
