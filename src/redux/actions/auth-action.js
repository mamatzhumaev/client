import {
  GET_ME,
  SHOW_LOADING,
  HIDDEN_LOADING,
  HIDDEN_ERROR,
  SHOW_ERROR,
  LOGOUT,
} from "../types";

export const getMeAction = (user) => {
  return {
    type: GET_ME,
    payload: user,
  };
};
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
export const showLoadingAction = () => {
  return {
    type: SHOW_LOADING,
  };
};
export const hideLoadingAction = () => {
  return {
    type: HIDDEN_LOADING,
  };
};
export const hideErrorAction = () => {
  return {
    type: HIDDEN_ERROR,
  };
};
export const showErrorAction = () => {
  return {
    type: SHOW_ERROR,
  };
};
