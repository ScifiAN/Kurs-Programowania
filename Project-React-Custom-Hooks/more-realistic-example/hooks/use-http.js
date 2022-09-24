import { useCallback, useState } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch( //'https://react-http-6b4a6.firebaseio.com/tasks.json'
        requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [applyData]);

  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;

// const loadedTasks = [];

//       for (const taskKey in data) {
//         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//       }

//       setTasks(loadedTasks);