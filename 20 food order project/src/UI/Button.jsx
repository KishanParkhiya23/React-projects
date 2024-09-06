export default function Button({ children, textOnly, className="", ...props }) {
  let btnClass = textOnly ? "text-button" : "button";
  btnClass += " " + className;
  return <button className={btnClass} {...props}>{children}</button>;
}
