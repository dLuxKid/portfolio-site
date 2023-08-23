"use client";

import { Icon } from "@iconify/react";

export default function Contact() {

  return (
    <section
      className="w-full section border-t-4 border-black-sec"
      id="get-in-touch"
    >
      <div className="w-full flex-center flex-col gap-4 md:gap-6 my-6">
        <h2 className="head_text uppercase blue_gradient_text">
          Get in touch with me
        </h2>
        <p className="body_text">
          Have a project idea or collaboration in mind? I'd love to hear from you! Feel free to reach out by sending me an email or text through my socials below. I'm excited to connect and discuss how we can work together to bring your ideas to life.
        </p>
        <ul className="flex-start flex-col gap-1 md:gap-2">
          <li>
            <a
              href="mailto:adetunjimarvellous09@gmail.com"
              target="_blank"
              className="cursor-pointer text-white-sec flex-center gap-2"
            >
              <Icon
                icon="clarity:email-solid"
                color="#fff"
                height={32}
                width={32}
              />
              <span className="tiny_text hover:underline">
                adetunjimarvellous09@gmail.com
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+2349052513271"
              rel="noopener"
              target="_blank"
              className="cursor-pointer text-white-sec flex-center gap-2"
            >
              <Icon
                icon="ic:baseline-whatsapp"
                color="#fff"
                height={32}
                width={32}
              />
              <span className="tiny_text hover:underline">09052513271</span>
            </a>
          </li>
        </ul>
        <p className="flex text-center title_text">MY SOCIALS</p>
        <ul className="flex-center gap-4">
          <li>
            <a
              title="twitter"
              href="https://twitter.com/JustMarvellous_"
              rel="noopener"
              target="_blank"
              className="cursor-pointer text-white-sec"
            >
              <Icon icon="mdi:twitter" color="#fff" height={32} width={32} />
            </a>
          </li>
          <li>
            <a
              title="linnkedin"
              href="https://www.linkedin.com/in/marvellousadetunji/"
              rel="noopener"
              target="_blank"
              className="cursor-pointer text-white-sec"
            >
              <Icon icon="mdi:linkedin" color="#fff" height={32} width={32} />
            </a>
          </li>
          <li>
            <a
              title="github"
              href="https://github.com/dLuxKid"
              rel="noopener"
              target="_blank"
              className="cursor-pointer text-white-sec"
            >
              <Icon icon="mdi:github" color="#fff" height={32} width={32} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
