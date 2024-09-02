export default function Button({ children, ...props }) {
  return (
    <button className="py-2 px-16 bg-zinc-800 rounded-md text-stone-200" {...props}>{children}</button>
  );
}
