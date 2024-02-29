import { Car } from "src/app/types";

const API_URL = "http://127.0.0.1:3001";

export async function getCars() {
  return fetch(`${API_URL}/cars`)
    .then((res) => res.json())
    .then((data) => data as Car[]);
}

export async function getCar(id: string) {
  const carHref = `/cars/${id}`;

  return fetch(`${API_URL}/cars?link.href=${carHref}`)
    .then((res) => res.json())
    .then((data) => data[0] as Car);
}
