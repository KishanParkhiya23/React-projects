import Button from "./Button.jsx";

export default function Sidebar({
  onChangeProjectState,
  projects,
  selectProduct,
  selectedProductId,
}) {
  return (
    <aside className="w-1/4 bg-slate-950 px-10 py-4 text-white rounded-lg">
      <h2 className="mb-4 font-bold uppercase">Your projects</h2>
      <div>
        <Button onClick={onChangeProjectState}>+ Add task</Button>
      </div>
      <ul className="my-4">
        {projects.map((project) => {
          let classes =
            "w-full text-left hover:bg-zinc-800 hover:text-stone-100 p-2 my-2 rounded hover:cursor-pointer";

          classes +=
            selectedProductId == project.id
              ? " text-stone-100 bg-zinc-800"
              : " text-stone-200 bg-stone-950";

          return (
            <li key={project.id}>
              <button
                className={classes}
                onClick={() => selectProduct(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
