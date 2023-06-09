import { combineReducers } from "redux";
import formDataReducer from "../reducers/FormDataReducer";

type RootState = {
  formData: FormData;
  // Add more state slices if needed
};

const rootReducer = combineReducers<RootState>({
  formData: formDataReducer,
  // Add more reducers if needed
});

export default rootReducer;
export type { RootState };
