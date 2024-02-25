"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef } from "react";

export const CarFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("carType");
  const filterRef = useRef<HTMLSelectElement>(null);

  function handleFilterChange(e: FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (filterRef.current?.value) {
      params.set("carType", filterRef.current?.value);
      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.delete("carType");
      router.push(`${pathname}`);
    }
  }

  return (
    <>
      <label htmlFor="carType" className="mr-2">
        Filter:
      </label>
      <select
        className="border p-2 mb-4 rounded-md w-full md:w-2/12"
        name="carType"
        defaultValue={query ?? ""}
        ref={filterRef}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="PB">Petrol</option>
        <option value="SU">Sports Utility</option>
      </select>
    </>
  );
};
