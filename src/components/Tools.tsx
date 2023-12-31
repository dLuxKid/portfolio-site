import { SkillsetDetails } from "@/assets/data/SkillsetDetails";
import SkillsetCard from "./SkillsetCard";

export default function Tools() {
  return (
    <section className="px-[5%] py-12 md:py-24 border-t-4 border-black-sec">
      <div className="mb-6 md:mb-8">
        <h1 className="head_text blue_gradient_text">Tools i use</h1>
      </div>
      <div className="flex-start gap-6 md:gap-x-4 md:gap-y-10 overflow-x-scroll overflow-y-visible md:overflow-visible md:flex-wrap">
        {SkillsetDetails.map((item, idx) => (
          <SkillsetCard label={item.label} imgUrl={item.imgUrl} key={idx} />
        ))}
      </div>
    </section>
  );
}
