import { FormData } from "./types";
import { Action } from "../actions/FormAction";

const initialState: FormData = {
  name: "",
  weight: "",
  time: "",
  dropdown: "",
};

const formDataReducer = (
  state: FormData = initialState,
  action: Action
): FormData => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_WEIGHT":
      return {
        ...state,
        weight: action.payload,
      };
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "SET_DROPDOWN":
      return {
        ...state,
        dropdown: action.payload,
      };
    default:
      return state;
  }
};

export default formDataReducer;
