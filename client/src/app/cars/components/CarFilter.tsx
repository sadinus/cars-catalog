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
    <select
      className="border p-2 rounded-md"
      defaultValue={query ?? ""}
      ref={filterRef}
      onChange={handleFilterChange}
    >
      <option value="">All</option>
      <option value="PB">Petrol</option>
      <option value="SU">Sports Utility</option>
    </select>
  );
};
