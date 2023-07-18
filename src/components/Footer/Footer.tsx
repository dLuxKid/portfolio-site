"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="w-full px-[5%] py-4 border-t-4 border-black-sec"
      id="#contact-me"
    >
      <ul className="flex items-center justify-center sm:justify-between flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
        <li className="tiny_text">
          <span className="font-semibold">
            {new Date().getFullYear().toString()} &copy;
          </span>{" "}
          Made by Adetunji Marvellous.
        </li>
        <li className="tiny_text flex items-center">
          <span>
            <Icon icon="mdi:location" color="#fff" height={24} width={24} />
          </span>
          Abuja, Nigeria.
        </li>
      </ul>
    </footer>
  );
}
