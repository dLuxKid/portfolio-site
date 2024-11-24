export default function Navbar() {
  return (
    <nav className="w-full px-[5%] py-4 sticky top-0 bg-transparent backdrop-blur-[2px] shadow-md z-50">
      <div className="flex-between w-full relative">
        <p className="logo_text">godkid</p>
        <div className="px-4 md:px-6 py-2 rounded-lg blue_gradient cursor-pointer">
          <a
            title="download resume"
            href="https://drive.google.com/file/d/12ySwyDCZ_BDr7ZevRgkQsJV4z0XNpDr2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center gap-2 nav_link"
          >
            <div className="w-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"
                />
              </svg>
            </div>
            <p className="tiny_text">Resume</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
