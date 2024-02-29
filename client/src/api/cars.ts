import { Car } from "src/app/types";

export async function getCars() {
  return fetch(`${process.env.API_URL}/cars`)
    .then((res) => res.json())
    .then((data) => data as Car[]);
}

export async function getCar(id: string) {
  const carHref = `/cars/${id}`;

  return fetch(`${process.env.API_URL}/cars?link.href=${carHref}`)
    .then((res) => res.json())
    .then((data) => data[0] as Car);
}
