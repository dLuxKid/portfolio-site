import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-full relative z-10 p-[5%]">
      <div className="flex items-center justify-center size-full flex-col gap-12 md:gap-16 p-[5%] rounded-[20px]">
        <h1 className="bg-text font-black text-7xl md:text-9xl ">404</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">
          Oops! Looks like you wandered off to a non-existent page.
        </p>
        <div className="max-w-xs mx-auto w-full">
          <Link href={"/"}>
            <button
              type="button"
              className="w-full rounded-full text-base md:text-lg font-medium h-12"
            >
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
