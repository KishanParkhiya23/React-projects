import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const setDataFun = useCallback((dataObj) => {
    const loadedTasks = [];
    for (const taskKey in dataObj) {
      loadedTasks.push({ id: taskKey, text: dataObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTask } = useHttp();

  useEffect(() => {
    fetchTask({
      url: "https://custom-hook-react-project-default-rtdb.firebaseio.com/tasks.json",
    }, setDataFun);
  }, [fetchTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTask}
      />
    </React.Fragment>
  );
}

export default App;
