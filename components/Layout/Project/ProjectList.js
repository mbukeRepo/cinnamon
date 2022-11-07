import ProjectItem from "./ProjectItem";
const projects = [
  {
    imageURl: "/images/image.png",
    title:
      "Corrily: Optimize prices<br class='block md:hidden'/> to maximize revenue",
    text: "Corrily tailors your prices and discounts to the needs of different user segments in order to<br class='block md:hidden'/> increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily<br class='block md:hidden'/> and incorporating a fresh, and stunning website redesign.",
    labels: ["PRODUCT DESIGN", "QUALITY ASSURANCE"],
    bg: "bg-[#91F1C3]",
  },
  {
    imageURl: "/images/image_1.png",
    title:
      "Corrily: Optimize prices<br class='block md:hidden'/> to maximize revenue",
    text: "Corrily tailors your prices and discounts to the needs of different user segments in order to<br class='block md:hidden'/> increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily<br class='block md:hidden'/> and incorporating a fresh, and stunning website redesign.",
    labels: ["PRODUCT DESIGN", "QUALITY ASSURANCE"],
    bg: "bg-[#52247F]",
  },
  {
    imageURl: "/images/image_2.png",
    title:
      "Corrily: Optimize prices<br class='block md:hidden'/> to maximize revenue",
    text: "Corrily tailors your prices and discounts to the needs of different user segments in order to<br class='block md:hidden'/> increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily<br class='md:hidden'/> and incorporating a fresh, and stunning website redesign.",
    labels: ["PRODUCT DESIGN", "QUALITY ASSURANCE"],
    bg: "bg-[#FFCB49]",
  },
];
const ProjectList = () => {
  return (
    <div className="px-[4.8rem] md:px-[2rem] mt-12">
      {projects.map(({ imageURl, text, bg, title, labels }, index) => (
        <ProjectItem
          key={index}
          imageURl={imageURl}
          title={title}
          text={text}
          labels={labels}
          bg={bg}
        />
      ))}
    </div>
  );
};
export default ProjectList;
