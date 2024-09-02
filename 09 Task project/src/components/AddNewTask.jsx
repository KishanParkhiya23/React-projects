import { useState, useRef } from "react";

export default function AddNewTask({ handleAddTask }) {
  const inputRef = useRef();
  // const [inputVal, setInputVal] = useState();

  // function handleInputChange(event) {
  //   setInputVal(event.target.value);
  // }

  function addTask() {
    console.log(inputRef.current.value)
    if (!(inputRef.current.value.trim())) {
      inputRef.current.className += " border-red-600 border-b-2"
    }else{
      handleAddTask(inputRef.current.value);
      inputRef.current.value = ""
    }
  }

  return (
    <div>
      <input
        type="text"
        className="p-2 bg-stone-200 text-stone-700 focus:outline-none focus:border-b-2 border-stone-400 w-9/12"
        ref={inputRef}
      />
      <button
        className="w-2/12 bg-zinc-300 hover:bg-zinc-200 p-2 ml-1 rounded focus:border-none"
        onClick={() => addTask()}
      >
        Add
      </button>
    </div>
  );
}
