import { forwardRef } from "react";

const InputGroup = forwardRef(function InputGroup(
  { label, textarea, ...props },
  ref
) {
  const inputClasses =
    "p-2 bg-stone-200 text-stone-700 focus:outline-none focus:border-b-2 border-stone-400";
  return (
    <p className="flex flex-col my-3 w-full">
      <label className="uppercase text-sm font-bold text-stone-600 my-1">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={inputClasses} />
      ) : (
        <input ref={ref} {...props} className={inputClasses} />
      )}
      {/* <span className="text-red-600 text-sm font-semibold">Error accrues</span> */}
    </p>
  );
});

export default InputGroup;
