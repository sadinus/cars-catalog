"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef } from "react";

export const CarFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("carType") ?? "ALL";
  const filterRef = useRef<HTMLSelectElement>(null);

  function handleFilterChange(e: FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set("carType", filterRef.current?.value || "ALL");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      className="border p-2 rounded-md"
      defaultValue={query}
      ref={filterRef}
      onChange={handleFilterChange}
    >
      <option value="ALL">All</option>
      <option value="PB">Petrol</option>
      <option value="SU">Sports Utility</option>
    </select>
  );
};
