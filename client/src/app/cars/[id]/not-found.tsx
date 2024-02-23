"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Car with this id does not exist</h2>
      <Link href={".."}>Go back to list of cars</Link>
    </>
  );
}
