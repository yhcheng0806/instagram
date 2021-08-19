import { LOGIN } from "../../constants/actionTypes";

const initState = {
  userInfo: null,
};

const userReducer = (state = initState, { type, pauload }) => {
  switch (type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};

export default userReducer;
