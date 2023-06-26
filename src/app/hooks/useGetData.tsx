import { useEffect, useReducer } from "react";

interface Action {
  type: "INIT_REQUEST" | "REQUEST_FAILURE" | "REQUEST_SUCCESS";
  payload?: {
    error?: any;
    data?: any;
  };
}

function reducer(state: unknown, action: Action) {
  switch (action.type) {
    case "INIT_REQUEST":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "REQUEST_FAILURE":
      return {
        loading: false,
        error: action?.payload?.error,
        data: null,
      };
    case "REQUEST_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action?.payload?.data,
      };
  }
}

export function useGetData<T>(URL_API: string) {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    requestData();
  }, [URL_API]);

  async function requestData() {
    try {
      dispatch({ type: "INIT_REQUEST" });
      const response = await fetch(URL_API);
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "REQUEST_FAILURE", payload: { error: json.error } });
      } else {
        dispatch({ type: "REQUEST_SUCCESS", payload: { data: json } });
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: "REQUEST_FAILURE", payload: { error: e } });
    }
  }
  return { loading: state.loading, error: state.error, data: state.data };
}
