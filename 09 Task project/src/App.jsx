import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedTask: undefined,
    projects: [],
    tasks: [],
  });

  function addTask(text) {
    setProjectState((prevProjectState) => {
      const newTaskData = {
        projectId: projectState.selectedTask,
        text: text,
        id: Math.random(),
        status: "PENDING",
      };

      return {
        ...prevProjectState,
        tasks: [...prevProjectState.tasks, newTaskData],
      };
    });
  }

  function updateTaskStatus(taskId) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: [
          ...prevProjectState.tasks,
          prevProjectState.tasks.map((task) => {
            if (task.id === taskId) {
              task.status = "COMPLETED";
            }
          }),
        ],
      };
    });
  }

  function deleteTask(taskId) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  function handleSelectProduct(id) {
    setProjectState((prev) => ({ ...prev, selectedTask: id }));
  }

  function handleProjectChange() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedTask: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevProjectState) => {
      const newData = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevProjectState,
        selectedTask: undefined,
        projects: [...prevProjectState.projects, newData],
      };
    });
  }

  function handleCancelNewProjectAdd() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedTask: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prevProjectState) => {
      return {
        selectedTask: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== id
        ),
        tasks: prevProjectState.tasks.filter((task) => task.projectId !== id),
      };
    });
  }
  console.log(projectState);

  let selectedProduct = projectState.projects.find(
    (product) => product.id === projectState.selectedTask
  );

  let selectedTasks = projectState.tasks
    ? projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedTask
      )
    : [];
  let content = (
    <SelectedProject
      project={selectedProduct}
      handleCancel={handleCancelNewProjectAdd}
      handleDelete={handleDeleteProject}
      handleAddTask={addTask}
      selectedTasks={selectedTasks}
      handleSelectedTask={deleteTask}
      handleTaskStatusUpdate={updateTaskStatus}
    />
  );

  if (projectState.selectedTask === null) {
    content = (
      <NewProject
        addProject={handleAddProject}
        handleCancelBtn={handleCancelNewProjectAdd}
      />
    );
  } else if (projectState.selectedTask === undefined) {
    content = <NoProjectSelected onChangeProjectState={handleProjectChange} />;
  }

  return (
    <main className="h-screen flex p-2 gap-5">
      <Sidebar
        onChangeProjectState={handleProjectChange}
        projects={projectState.projects}
        selectProduct={handleSelectProduct}
        selectedProductId={projectState.selectedTask}
      />
      {content}
    </main>
  );
}

export default App;
