"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<any>(false);

  const nav =
    "sticky top-0 left-0 bg-transparent backdrop-blur-[2px] shadow-md z-50";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current = true;
      } else {
        navRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`w-full px-[5%] py-4 ${navRef.current && nav}`}
      ref={navRef}
    >
      <div className="flex-between w-full relative">
        <p className="logo_text">
          <Link href={"/"}>Marvellous</Link>
        </p>

        <ul className="">
          <li className="px-6 py-2 rounded-2xl blue_gradient nav_link cursor-pointer">
            <a title="download resume" href="../app/favicon.ico" download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
