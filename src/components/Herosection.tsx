
import Avatar from "./Avatar";

export default function Herosection() {
  return (
    <section className="px-[5%] py-16 md:min-h-[80vh] border-t-4 border-black-sec">
      <div className="flex justify-between items-center flex-col md:mt-12">
        <Avatar />
        <div className="w-full sm:w-[80%] md:w-[60%] text-center mt-10 flex flex-col gap-2">
          <h2 className="head_text tracking-wide blue_gradient_text">
            Hello, I&#39;m Adetunji Marvellous
          </h2>
          <p className="body_text">
            I am a frontend web developer based in Nigeria. I specialize in
            building responsive web designs and appealing UI for users.
          </p>
        </div>
        <div className="flex-center flex-col md:flex-row gap-4 mt-6 md:mt-8">
          <a href="#projects">
            <button className="white_btn uppercase" type="button">
              See my projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
