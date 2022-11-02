import Image from "next/image";
import View from "../../UI/View";
import BlogItem from "./BlogItem";
const blogs = [
  {
    imageUrl: "/images/blog1.png",
    title: "SALES",
    labels: ["Matija Bermanec & L...", "2022-10-13", "6min"],
    description: "Differences in Hiring an Agency vs. Freelancers 2.0",
  },
  {
    imageUrl: "/images/blog2.png",
    title: "DEVELOPMENT",
    labels: ["Samantha Hol...", "2022-10-03", "3min"],
    description: "Cinnamon Flutter Template Overview",
  },
  {
    imageUrl: "/images/blog3.png",
    title: "DESIGN",
    labels: ["Jan Marin", "2022-09-15", "10min"],
    description: "How Tinder Swindled User Experience",
  },
];

const BlogList = () => {
  return (
    <div className="px-[4.8rem] flex flex-col gap-16">
      <h2 className="font-mont-bold text-6xl">
        Stay in the loop
        <br /> on tech topics
      </h2>
      <div className="grid grid-cols-3">
        {blogs.map(({ imageUrl, labels, description, title }) => (
          <BlogItem
            imageUrl={imageUrl}
            labels={labels}
            description={description}
            title={title}
          />
        ))}
      </div>
      <View>VIEW MORE BLOGS</View>
    </div>
  );
};

export default BlogList;