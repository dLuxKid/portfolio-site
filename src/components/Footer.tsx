"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full relative flex-center flex-col">
      <div className="flex-center flex-col gap-4 absolute animate-bounce-slow -top-2 mx-auto blue_gradient p-8 md:p-16 rounded-br-full rounded-bl-full">
        <p className="text-white-pry title_text">
          Interested in working with me ?
        </p>
        <span>
          <Icon
            icon="icon-park-solid:down-two"
            color="white"
            height={48}
            width={48}
          />
        </span>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </footer>
  );
}
