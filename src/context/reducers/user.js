import { LOGIN, LOGOUT } from "../../constants/actionTypes";
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
    default:
      return state;
  }
};

export default userReducer;
