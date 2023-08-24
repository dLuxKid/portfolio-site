
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
          <span className="mr-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="white" d="M14.95 13.955a7.005 7.005 0 0 0 0-9.904a6.998 6.998 0 0 0-9.9 0a7.005 7.005 0 0 0 0 9.904l1.521 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37l1.128-1.114ZM10 12a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" /></svg>
          </span>
          Abuja, Nigeria.
        </li>
      </ul>
    </footer>
  );
}
