import * as API from "../../api";
import { LOGIN, REGISTER } from "../../constants/actionTypes";

export const login = (formData, cb) => async (dispatch) => {
  try {
    const res = await API.login(formData);
    console.log(res, "--res---");
    dispatch({ type: LOGIN, payload: {} });
  } catch (error) {
    console.log(error.message, "--error---");

  }
  cb && cb();
};
