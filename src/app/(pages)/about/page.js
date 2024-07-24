"use client";

import Link from "next/link";
import Loading from "./loading";
import Error from "./error";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>
        <section className="flex flex-col items-center justify-center gap-5 h-screen">
          <h1 className="text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 font-bold">
            Asil Gey!
          </h1>
          <Link href={"/"} className="text-[20px]">
            Return to home
          </Link>
        </section>
      </ErrorBoundary>
    </Suspense>
  );
}
