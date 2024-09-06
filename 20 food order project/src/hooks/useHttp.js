import { useState } from "react";

export default function useHttp() {
  const [isFetching, setIsFetching] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  async function sendRequest(url, config = null) {
    setIsFetching(true);
    setError(null);
    try {
      console.log(url, config);

      const response = await fetch(url, {
        method: config ? config.method : "GET",
        headers: config ? config.headers : {},
        body: config && JSON.stringify(config.body),
      });

      const data = await response.json();
      console.log("data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Error while sending request.");
      }
      setData(data);
    } catch (error) {
      console.log("error:", error);
      setError(error.message || "Error while sending request.");
    }
    setIsFetching(false);
  }

  //   console.log(data);

  return {
    sendRequest,
    data,
    isFetching,
    error,
  };
}
