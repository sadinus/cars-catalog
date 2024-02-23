import { render } from "@testing-library/react";
import CarList from "./CarList";
import { Car } from "../types";

const mockCars: Car[] = [
  {
    id: "23232323-33333-2",
    title: "Car 1",
    brand: "Brand 1",
    vehicleType: "PB",
    link: { href: "/car/1", title: "test" },
  },
  {
    id: "232323-444-333",
    title: "Car 2",
    brand: "Brand 2",
    vehicleType: "SU",
    link: { href: "/car/2", title: "test" },
  },
];

describe("CarList component", () => {
  it("renders correctly with provided cars", () => {
    const { getByText, getAllByRole } = render(
      <CarList cars={mockCars} carType={"ALL"} />
    );

    mockCars.forEach((car) => {
      expect(getByText(car.title)).toBeInTheDocument();
      expect(getByText(car.brand)).toBeInTheDocument();
    });

    const viewDetailButtons = getAllByRole("button", { name: /view details/i });
    expect(viewDetailButtons).toHaveLength(mockCars.length);
  });

  it("filters cars correctly based on carType prop", () => {
    const { getByText, queryByText } = render(
      <CarList cars={mockCars} carType={"PB"} />
    );

    expect(queryByText(mockCars[1].title)).toBeNull();

    expect(getByText(mockCars[0].title)).toBeInTheDocument();
  });
});
