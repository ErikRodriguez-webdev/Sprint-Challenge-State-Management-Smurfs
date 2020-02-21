import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const getItems = () => (dispatch) => {
  dispatch({ type: GET_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      console.log("get", response.data);
      dispatch({ type: GET_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log("get", error);
      dispatch({ type: GET_ERROR, payload: error });
    });
};

export const postItems = (obj) => (dispatch) => {
  dispatch({ type: POST_DATA });
  axios
    .post("http://localhost:3333/smurfs", obj)
    .then((response) => {
      console.log("post", response.data);
      dispatch({ type: POST_DATA, payload: response.data });
    })
    .catch((error) => {
      console.log("post", error);
      dispatch({ type: POST_ERROR, payload: error });
    });
};
