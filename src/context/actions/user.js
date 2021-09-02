import * as API from "../../api";
import * as ROUTES from "../../constants/routes";
import { FOLLOW_USER, LOGIN, LOGOUT, MODIFY_USERINFO, UNFOLLOW_USER } from "../../constants/actionTypes";

export const login = (formData, err) => async (dispatch) => {
  const res = await API.login(formData);
  if (res.message) {
    return err(res.message);
  }
  dispatch({ type: LOGIN, payload: res });
};

export const register = (formData, history, err) => async (dispatch) => {
  const res = await API.register(formData);
  if (res.message) {
    return err(res.message);
  }
  history.replace(ROUTES.LOGIN);
};

export const logout = (history) => {
  history.replace("/login");
  return { type: LOGOUT };
};

export const modifyUserInfo = (payload) => {
  return {
    type: MODIFY_USERINFO,
    payload,
  };
};

export const followUser = (payload) => async(dispatch) => {
  dispatch({
    type:FOLLOW_USER,
    payload
  })
}

export const unfollowUser = (payload) => async(dispatch) => {
  dispatch({
    type:UNFOLLOW_USER,
    payload
  })
}