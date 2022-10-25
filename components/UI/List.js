const List = ({ children, className }) => {
  return (
    <div
      className={
        "grid grid-cols-3 place-content-center place-items-center " + className
      }
    >
      {children}
    </div>
  );
};
export default List;
