import { SkillsetDetails } from "@/assets/data/SkillsetDetails";
import SkillsetCard from "./SkillsetCard";

export default function Tools() {
  return (
    <section className="section border-t-4 border-black-sec">
      <div className="mb-6 md:mb-8">
        <h1 className="head_text">What I do.</h1>
      </div>
      <div className="flex-between flex-wrap">
        {SkillsetDetails.map((item, idx) => (
          <SkillsetCard label={item.label} imgUrl={item.imgUrl} key={idx} />
        ))}
      </div>
    </section>
  );
}
