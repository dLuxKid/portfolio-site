"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full relative flex-center flex-col section border-t-2 border-black-sec">
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
      <div
        className="flex-between flex-col md:flex-row w-full mt-64"
        id="get-in-touch"
      >
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-baseline gap-8">
          <h2 className="title_text uppercase">Get in touch with me</h2>
          <p className="body_text">
            Have something in mind? Looking to partner or work together? Fill in
            the form and ill be sure to reach out
          </p>
          <ul>
            <li>
              <a
                href=""
                className="flex gap-2 items-center py-2 text-white-sec"
              >
                <span>
                  <Icon
                    icon="clarity:email-solid"
                    color="#fff"
                    height={32}
                    width={32}
                  />
                </span>
                <span className="tiny_text">
                  adetunjimarvellous09@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%]"></div>
      </div>
      <div></div>
    </footer>
  );
}
