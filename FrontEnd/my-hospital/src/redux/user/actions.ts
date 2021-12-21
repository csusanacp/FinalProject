import { User } from "../../models/user/types";
import {
  SIGNIN_REQUESTED,
  SIGNIN_SUCCESS,
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCESS,
  userSigninRequested,
  userSigninSuccess,
  userLoginSuccess,
  userLoginRequested,
  userLogoutRequested,
  userLogoutSuccess,
} from "./types";

export const signinRequested = (
  signUser: Partial<User>
): userSigninRequested => ({
  type: SIGNIN_REQUESTED,
  payload: signUser,
});

export const signinSuccess = (newUser: User): userSigninSuccess => ({
  type: SIGNIN_SUCCESS,
  payload: newUser,
});

export const loginRequested = (logUser: Partial<User>): userLoginRequested => ({
  type: LOGIN_REQUESTED,
  payload: logUser,
});

export const loginSuccess = (newUser: User): userLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: newUser,
});

export const logoutRequested = (logoutUser:User): userLogoutRequested =>({
  type: LOGOUT_REQUESTED,
  payload: logoutUser,
});
export const logoutSuccess = (): userLogoutSuccess => ({
  type: LOGOUT_SUCCESS,
});
