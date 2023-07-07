import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex-between w-full px-[5%] py-4">
        <p className="logo_text">
          <Link href={"/"}>Marvellous</Link>
        </p>
        <ul className="flex-between gap-4">
          <li className="nav_link">
            <Link href="/about">About</Link>
          </li>
          <li className="nav_link">
            <Link href="/projects">Project</Link>
          </li>
          <li className="ml-2 px-3 py-1 rounded-2xl blue_gradient">
            <a
              title="download"
              href="../app/favicon.ico"
              download
              className="nav_link"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
