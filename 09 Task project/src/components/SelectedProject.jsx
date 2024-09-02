import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  handleCancel,
  handleDelete,
  handleAddTask,
  selectedTasks,
  handleSelectedTask,
  handleTaskStatusUpdate
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className="w-[50rem] mt-16">
      <header>
        <div className="flex items-center justify-between">
          <h1 className="font-bold uppercase text-stone-800 my-2">
            {project.title}
          </h1>
          <div className="flex gap-3">
            <button
              className="bg-zinc-200 py-2 px-4 rounded-lg"
              onClick={handleCancel}
            >
              Close
            </button>
            <button className="text-red-600 py-2 px-4 rounded-lg" onClick={() => handleDelete(project.id)}>
              Delete
            </button>
          </div>
        </div>
        <p className="my-2 text-stone-600 font-bold">{formattedDate}</p>
        <p className="my-2 text-stone-400 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <hr className="my-4" />
      <Tasks handleAddTask={handleAddTask} selectedTasks={selectedTasks} handleSelectedTask={handleSelectedTask} handleTaskStatusUpdate={handleTaskStatusUpdate}/>
    </div>
  );
}
