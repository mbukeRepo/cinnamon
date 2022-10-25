const Section = ({ children, direction = "flex-col" }) => {
  let alignment = "items-center";
  if (direction === "flex-row") {
    alignment = "items-start";
  }
  return (
    <div className={"flex " + alignment + " gap-16 " + direction}>
      {children}
    </div>
  );
};

export default Section;
