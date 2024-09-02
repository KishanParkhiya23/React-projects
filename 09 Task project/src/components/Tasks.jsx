import AddNewTask from "./AddNewTask";

export default function Tasks({
  handleAddTask,
  selectedTasks,
  handleSelectedTask,
  handleTaskStatusUpdate,
}) {
  let taskClasses =
    "p-2 text-stone-700 rounded-sm focus:outline-none focus:border-b-2 border-stone-400 min-w-[80%]";

  return (
    <div>
      <h2 className="my-2 font-bold uppercase text-zinc-700">Tasks</h2>
      <AddNewTask handleAddTask={handleAddTask} />
      <hr className="my-4" />

      {selectedTasks.length !== 0 ? (
        <ul className="my-6">
          {selectedTasks.map((task) => {
            if (task.status !== "COMPLETED") {
              taskClasses += " bg-red-100";
            } else {
              taskClasses += " bg-green-100";
            }
            return (
              <li className="flex my-2 justify-between gap-1">
                <span key={task.id} className={taskClasses}>
                  {task.text}
                </span>
                <div className="w-full flex justify-between">
                  {task.status !== "COMPLETED" ? (
                    <button
                      className="text-black hover:bg-stone-200 hover:text-black ml-1 rounded-sm text-sm px-3"
                      onClick={() => handleTaskStatusUpdate(task.id)}
                    >
                      Complete
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    className=" text-red-500 hover:bg-red-400 hover:text-white ml-1 rounded-sm text-sm px-3"
                    onClick={() => handleSelectedTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-zinc-400 text-sm font-semibold my-5">
          This project currently don't have a task yet
        </p>
      )}
    </div>
  );
}
