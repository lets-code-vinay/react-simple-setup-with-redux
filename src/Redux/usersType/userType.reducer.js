import { SET_USER_DETAIL } from "./userType.types";

const INITIAL_STATE = {
  userData: { firstName: "", id: null, lastName: "", email: "", avatar: "" },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return Object.assign({}, state, {
        ...state,
        userData: action.value,
      });

    default:
      return state;
  }
};

export default userReducer;
