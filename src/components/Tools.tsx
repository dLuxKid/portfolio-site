import { SkillsetDetails } from "@/assets/data/SkillsetDetails";
import SkillsetCard from "./SkillsetCard";

export default function Tools() {
  return (
    <section className="section border-t-4 border-black-sec">
      <div className="mb-6 md:mb-8">
        <h1 className="head_text">Tools i use</h1>
      </div>
      <div className="flex-between gap-4 flex-wrap">
        {SkillsetDetails.map((item, idx) => (
          <SkillsetCard label={item.label} imgUrl={item.imgUrl} key={idx} />
        ))}
      </div>
    </section>
  );
}