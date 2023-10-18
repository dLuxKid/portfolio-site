import Image from "next/image";

export default function SkillsetCard({
  label,
  imgUrl,
}: {
  label: string;
  imgUrl: string;
}) {
  return (
    <div className="w-full min-w-[250px] md:w-[31%] lg:w-[24%] flex-center flex-col gap-4 py-8 rounded-2xl bg-black-sec mb-4 md:mb-6 duration-300 drop-shadow-lg hover:-translate-y-4">
      <Image
        src={imgUrl}
        alt="Language Thumbnails"
        className="w-[80%] h-32 object-fill object-center"
      />
      <span className="title_text">{label}</span>
    </div>
  );
}
