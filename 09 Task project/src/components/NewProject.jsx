import InputGroup from "./InputGroup";
import { useRef } from "react";

export default function NewProject({ addProject, handleCancelBtn }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    let isError = false;
    if (!enteredTitle) {
      title.current.className += " border-red-500 border-b-2";
      isError = true;
    } else {
      title.current.className += " border-none";
    }

    if (!enteredDescription) {
      description.current.className += " border-red-500 border-b-2";
      isError = true;
    } else {
      description.current.className += " border-none";
    }
    if (!enteredDueDate) {
      dueDate.current.className += " border-red-500 border-b-2";
      isError = true;
    } else {
      dueDate.current.className += " border-none";
    }

    // Add condition
    if (!isError) {
      addProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }
  }

  return (
    <div className="w-[35rem] mt-12">
      <menu className="flex gap-5 justify-end items-center">
        <button
          className="text-stone-950 hover:text-stone-600 font-bold"
          onClick={handleCancelBtn}
        >
          Cancel
        </button>
        <button
          className="text-slate-50 bg-stone-800 rounded-lg px-4 py-2 hover:bg-stone-950 font-bold"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      <div className="mx-2">
        <InputGroup type="text" ref={title} label="Title" />
        <InputGroup ref={description} label="Description" textarea />
        <InputGroup type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
