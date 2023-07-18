"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/navbar.module.css";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current?.classList.add(styles.nav);
      } else {
        navRef.current?.classList.remove(styles.nav);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <nav className="w-full px-[5%] py-4" ref={navRef}>
      <div className="flex-between w-full relative">
        <p className="logo_text" onClick={() => setIsMobileMenuOpen(false)}>
          <Link href={"/"}>Marvellous</Link>
        </p>

        {/* desktop nav */}
        {screenSize > 768 && (
          <ul className="flex-between gap-4">
            <li className="nav_link">
              <Link href="/about">About</Link>
            </li>
            <li className="nav_link">
              <Link href="/projects">Project</Link>
            </li>
            <li className="ml-2 px-4 py-2 rounded-3xl blue_gradient nav_link">
              <a title="download" href="../app/favicon.ico" download>
                Download CV
              </a>
            </li>
          </ul>
        )}

        {/* nav button */}
        <span className="absolute z-50 inset-y-0 right-0 flex items-center md:hidden">
          {isMobileMenuOpen ? (
            <Icon
              icon="ep:close-bold"
              width={24}
              height={24}
              color="#fff"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            />
          ) : (
            <Icon
              icon="ic:round-bar-chart"
              rotate={3}
              color="#fff"
              width={24}
              height={24}
              onClick={() => {
                setIsMobileMenuOpen(true);
              }}
            />
          )}
        </span>

        {/* mobile menu */}
        {isMobileMenuOpen && screenSize <= 768 && (
          <ul
            className="flex-start flex-col bg-white-pry text-center max-w-[360px] gap-12 w-full min-h-[100vh] absolute z-20 top-[3rem] right-0 bottom-0 py-[20%]"
            onClick={toggleMobileMenu}
          >
            <li className="nav_link w-full">
              <Link href="/about">Mobile About</Link>
            </li>
            <li className="nav_link w-full">
              <Link href="/projects">Project</Link>
            </li>
            <li className="w-full flex justify-center">
              <div className="ml-2 px-4 py-2 rounded-3xl blue_gradient nav_link">
                <a title="download" href="../app/favicon.ico" download>
                  Download CV
                </a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
