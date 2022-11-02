import Image from "next/image";
const ProjectItem = ({ imageURl, bg, labels, title, text }) => {
  return (
    <div className="flex flex-col gap-8 py-[5.6rem]">
      <div className={bg + " group"}>
        <Image
          src={imageURl}
          width={1920}
          height={888}
          alt="Responsiveness"
          className="group-hover:scale-105 w-full h-full transition-all duration-300"
        />
      </div>
      <ul className="flex gap-6 text-xs text-project-text font-mont-bold">
        {labels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
      <h3
        className="font-mont-bold text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p
        className="text-project-text"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default ProjectItem;
