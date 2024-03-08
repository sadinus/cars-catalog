import { ApiCar, Car } from "src/app/types";
import data from "./data.json";

// data.json used only to show the demo on netlify

export async function getCars() {
  let apiCars: ApiCar[];

  if (process.env.NODE_ENV === "production") {
    apiCars = data.cars as ApiCar[];
  } else {
    apiCars = await fetch(`${process.env.API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => data as ApiCar[]);
  }

  return apiCars.map(toCar);
}

export async function getCar(id: string) {
  let apiCar: ApiCar;

  if (process.env.NODE_ENV === "production") {
    apiCar = data.cars.find((x) => x.link.href === `/cars/${id}`) as ApiCar;
  } else {
    const carHref = `/cars/${id}`;

    apiCar = await fetch(`${process.env.API_URL}/cars?link.href=${carHref}`)
      .then((res) => res.json())
      .then((data) => data[0] as ApiCar);
  }

  if (apiCar) return toCar(apiCar);
}

function toCar(apiCar: ApiCar): Car {
  const urlId = apiCar.link.href.replace("/cars/", "");
  return { ...apiCar, urlId } as Car;
}
