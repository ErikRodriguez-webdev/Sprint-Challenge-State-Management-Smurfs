import {
  GET_DATA,
  GET_SUCCESS,
  GET_ERROR,
  POST_DATA,
  POST_SUCCESS,
  POST_ERROR
} from "../actions/index";

export const initialState = {
  smurfsArray: [],
  isGetting: false,
  isPosting: false,
  errors: ""
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, isGetting: true };
    case GET_SUCCESS:
      return {
        ...state,
        smurfsArray: action.payload,
        isGetting: false
      };
    case GET_ERROR:
      return { ...state, isGetting: false, errors: action.payload };
    case POST_DATA:
      return { ...state, isPosting: true };
    case POST_SUCCESS:
      return {
        ...state,
        smurfsArray: action.payload,
        isPosting: false
      };
    case POST_ERROR:
      return { ...state, isPosting: false, errors: action.payload };
    default:
      return state;
  }
};
