const Button = ({ children, className }) => {
  return (
    <button
      className={
        "py-3 outline-none text-center font-bold rounded-lg " + className
      }
    >
      {children}
    </button>
  );
};

export default Button;
