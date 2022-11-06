export default function Button({ children }) {
  return (
    <button className="btn">
      <div className="btn__shadow"></div>
      <span className="btn__text">{children}</span>
    </button>
  );
}
