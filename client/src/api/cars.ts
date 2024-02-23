import { Car } from "src/app/types";

const API_URL = "http://127.0.0.1:3001";

export async function getCars() {
  return fetch(`${API_URL}/cars`)
    .then((res) => res.json())
    .then((data) => data as Car[]);
}

export async function getCar(id: string) {
  return fetch(`${API_URL}/cars/`)
    .then((res) => res.json())
    .then((cars: Car[]) =>
      cars.find((car) => car.link.href.replace("/cars/", "") === id)
    )
    .then((data) => data as Car);
}
