import { FOLLOW_USER, LOGIN, LOGOUT, MODIFY_USERINFO, UNFOLLOW_USER } from "../../constants/actionTypes";
import { getUserInfo, setUserInfo } from "../../utils/auth";

const initState = getUserInfo()?.result || null;

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      setUserInfo(payload);
      return { ...state, ...payload.result };
    case LOGOUT:
      localStorage.clear();
      return null;
    case MODIFY_USERINFO:
      return { ...state, ...payload };
    case FOLLOW_USER:
      return {
        ...state,
        following: [...state.following, payload]
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(id => id !== payload)
      }
    default:
      return state;
  }
};

export default userReducer;
