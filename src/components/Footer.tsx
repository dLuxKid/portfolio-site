import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="w-full relative flex-center flex-col ">
      <Contact />
      <div className="w-full section border-t-4 border-black-sec">
        <ul className="flex items-center justify-center sm:justify-between flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
          <li className="tiny_text">
            <span className="font-semibold">
              {new Date().getFullYear().toString()} &copy;
            </span>{" "}
            Made by Adetunji Marvellous,
          </li>
          <li className="tiny_text">
            <span></span>Abuja, Nigeria.
          </li>
        </ul>
      </div>
    </footer>
  );
}
