import React, { useEffect, useRef } from "react";

import classes from "./Input.module.css";
import { useImperativeHandle } from "react";

export default React.forwardRef(function Input(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
