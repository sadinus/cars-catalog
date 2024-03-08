"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 md:px-2">
      <h2 className="text-3xl font-bold my-4">
        Car with this id does not exist
      </h2>
      <Link
        className={"text-xl text-blue-600 dark:text-blue-500 hover:underline"}
        href={".."}
      >
        Go back to list of cars
      </Link>
    </div>
  );
}
