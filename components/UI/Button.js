export default function Button({ children }) {
  return (
    <button className="text-[1.06rem] bg-primary border-2 border-primary text-white py-[0.75rem] px-8">
      <div className=""></div>
      {children}
    </button>
  );
}
