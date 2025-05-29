export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full relative">
        <h1 className="text-base sm:text-xl md:text-3xl italic font-semibold">
          Ma.
        </h1>

        <a
          title="view resume"
          href="https://drive.google.com/file/d/12ySwyDCZ_BDr7ZevRgkQsJV4z0XNpDr2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center gap-2"
        >
          <p className="text-sm md:text-xl font-medium hover:underline">
            Resume
          </p>
        </a>
      </div>
    </nav>
  );
}
