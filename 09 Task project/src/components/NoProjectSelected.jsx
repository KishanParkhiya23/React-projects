import Button from "./Button";
import noProjectImg from "../assets/no-projects.png";
export default function NoProjectSelected({ onChangeProjectState }) {
  return (
    <div className="text-center w-full flex justify-center flex-col gap-2 ">
      <img src={noProjectImg} alt="No project" className="w-16 mx-auto" />
      <h2 className="text-stone-500 font-bold ">No project selected</h2>
      <p className="text-sm text-stone-400 font-semibold">
        Create a project or select existing project for more.
      </p>
      <div className="mt-3">
        <Button onClick={onChangeProjectState}>+ Create a new project</Button>
      </div>
    </div>
  );
}
