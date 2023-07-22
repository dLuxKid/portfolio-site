import React from "react";
import Avatar from "./Avatar";

export default function Herosection() {
  return (
    <section className="section md:min-h-[80vh] border-t-4 border-black-sec">
      <div className=" flex justify-between items-center flex-col mt-8">
        <Avatar />
        <div className="w-full sm:w-[80%] md:w-[60%] text-center mt-10 flex flex-col gap-2">
          <h2 className="head_text tracking-wide">
            <span className="blue_gradient_text">
              Hello, I'm Adetunji Marvellous
            </span>
          </h2>
          <p className="body_text">
            I am a frontend web developer based in Nigeria. I specialize in
            building responsive web designs and appealing UI for users.
          </p>
        </div>
        <div className="flex-center flex-col md:flex-row gap-4 mt-6 md:mt-8">
          <button className="outline_btn uppercase" type="button">
            Get in touch
          </button>
          <button className="white_btn uppercase" type="button">
            See my projects
          </button>
        </div>
      </div>
    </section>
  );
}
