import { LOGIN } from "../../constants/actionTypes";

const initState = {
  avatar: null,
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
