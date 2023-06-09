export const SET_FORM_DATA = "SET_FORM_DATA";

interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: FormData;
}

export const setFormData = (formData: FormData): SetFormDataAction => {
  return {
    type: SET_FORM_DATA,
    payload: formData,
  };
};

export type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_WEIGHT"; payload: string }
  | { type: "SET_TIME"; payload: string }
  | { type: "SET_DROPDOWN"; payload: string };
