import {
  GET_ME,
  SHOW_LOADING,
  HIDDEN_LOADING,
  HIDDEN_ERROR,
  SHOW_ERROR,
  LOGOUT,
} from "../types";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
      };
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case HIDDEN_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case SHOW_ERROR: {
      return {
        ...state,
        error: "Ой что то пошло не так",
      };
    }
    case HIDDEN_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
