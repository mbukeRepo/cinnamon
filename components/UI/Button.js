export default function Button({ children }) {
  return (
    <button className="text-[1.06rem] bg-primary text-white py-[0.75rem] px-8">
      {children}
    </button>
  );
}
