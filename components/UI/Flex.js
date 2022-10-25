const Flex = ({ children, className = "items-center" }) => {
  return (
    <div className={"flex gap-4 justify-center " + className}>{children}</div>
  );
};

export default Flex;
