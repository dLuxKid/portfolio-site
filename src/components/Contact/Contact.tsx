"use client";

import { Icon } from "@iconify/react";
import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

type initialStateType = typeof initialState;

type reducerAction = { input: string; value: string };

const formReducer = (state: initialStateType, action: reducerAction) => {
  return { ...state, [action.input]: action.value };
};

export default function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ input: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <section
      className="flex justify-between mb-8 items-start flex-col gap-4 md:flex-row w-full section border-t-4 border-black-sec"
      id="get-in-touch"
    >
      <div className="w-full md:w-[45%] flex flex-col items-center md:items-baseline gap-4 md:gap-8">
        <h2 className="head_text uppercase blue_gradient_text">
          Get in touch with me
        </h2>
        <p className="body_text">
          Have something in mind? Looking to partner or work together? Fill in
          the form and ill be sure to reach out
        </p>
        <ul className="flex-center gap-4">
          <li>
            <a
              href="mailto:adetunjimarvellous09@gmail.com"
              target="_blank"
              className="cursor-pointer text-white-sec"
            >
              <Icon
                icon="clarity:email-solid"
                color="#fff"
                height={32}
                width={32}
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+2349052513271"
              rel="noopener"
              target="_blank"
              className="cursor-pointer text-white-sec"
            >
              <Icon
                icon="ic:baseline-whatsapp"
                color="#fff"
                height={32}
                width={32}
              />
            </a>
          </li>
          <li>
            <a
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
      <div className="w-full md:w-[45%]">
        <form
          className="flex items-stretch justify-center gap-4 md:gap-6 flex-col"
          onSubmit={handleSubmit}
        >
          <label className="input_form">
            <span className="form_label">Your Name</span>
            <input
              type="text"
              title="name"
              name="name"
              placeholder="Enter your name"
              value={state.name}
              onChange={handleChange}
              className="form_input"
            />
          </label>
          <label className="input_form">
            <span className="form_label">Your Email</span>
            <input
              type="email"
              title="email"
              name="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={handleChange}
              className="form_input"
            />
          </label>
          <label className="input_form">
            <span className="form_label">What are you looking for</span>
            <textarea
              name="message"
              title="message"
              value={state.message}
              onChange={handleChange}
              className="form_textarea"
            />
          </label>
          <div>
            <button className="pry_btn" onSubmit={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
