import { useState, useEffect, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConf, applyFun) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConf.url, {
          method: requestConf.method ? requestConf.method : "GET",
          headers: requestConf.headers ? requestConf.headers : {},
          body: requestConf.body ? JSON.stringify(requestConf.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyFun(data);

        //   const loadedTasks = [];

        //   for (const taskKey in data) {
        //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        //   }

        //   setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
