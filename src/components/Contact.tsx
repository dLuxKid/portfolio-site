export default function Contact() {
  return (
    <footer className="w-full py-8 md:py-12">
      <div className="pb-4 border-b-2 border-black">
        <h1 className="vollkorn text-2xl md:text-3xl text-black font-semibold">
          Contact Me
        </h1>
      </div>
      <div className="space-y-12 md:space-y-20 mt-8">
        <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-8 gap-x-20">
          <p className="text-base md:text-2xl font-medium leading-8 md:leading-10">
            Have a project idea or collaboration in mind?
            <span className="flex gap-4 items-center">
              I&#39;d love to hear from you!
              <svg
                className="rotate-90 lg:rotate-0 w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-5.24032e-07 9.01154L-3.92898e-07 12.0115L18.3146 12.0115L11.3126 18.9462L13.4097 21L24 10.5115L13.4097 1.32119e-06L11.3126 2.1L18.3146 9.01154L-5.24032e-07 9.01154Z"
                  fill="#181717"
                />
              </svg>
            </span>
          </p>
          <div className="flex flex-col gap-2 md:gap-4">
            <a
              title="email"
              rel="noopener noreferrer"
              href="mailto:adetunjimarvellous09@gmail.com"
              target="_blank"
              className="cursor-pointer hover:underline vollkorn text-base md:text-2xl font-bold"
            >
              adetunjimarvellous09@gmail.com
            </a>
            <a
              title="view resume"
              href="https://drive.google.com/file/d/12ySwyDCZ_BDr7ZevRgkQsJV4z0XNpDr2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg hover:underline"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="flex lg:items-center lg:justify-between flex-col-reverse lg:flex-row gap-y-6 gap-x-20">
          <p className="text-sm md:text-base">
            GODKID - &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <ul className="flex items-center lg:justify-center gap-4 md:gap-8">
            <li>
              <a
                title="whatsapp/phone"
                rel="noopener noreferrer"
                href="https://wa.me/+2349052513271"
                target="_blank"
                className="cursor-pointer underline text-sm md:text-xl"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a
                title="x"
                href="https://x.com/marvellousonx"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer underline text-sm md:text-xl"
              >
                X
              </a>
            </li>
            <li>
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/marvellousadetunji/"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer underline text-sm md:text-xl"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                title="github"
                href="https://github.com/dLuxKid"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer underline text-sm md:text-xl"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
