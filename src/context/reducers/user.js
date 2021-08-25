import { LOGIN, LOGOUT, MODIFY_AVATAR } from "../../constants/actionTypes";
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
    case MODIFY_AVATAR:
      return { ...state, avatar: payload };
    default:
      return state;
  }
};

export default userReducer;
