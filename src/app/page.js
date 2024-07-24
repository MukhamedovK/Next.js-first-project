"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-24 min-h-screen">
      <Link href={"/dashboard"} className="text-[25px]">
        Dashboard
      </Link>
      <Link href={"/about"}>About Page</Link>
    </div>
  );
}
