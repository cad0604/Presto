import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { notification } from "antd";
import { axiosClient } from "utils/axios";
import axios from "axios";

function* login(action) {
  try {
    const response = yield axiosClient.post("/admin/auth/login", action.payload);

    localStorage.setItem("user", JSON.stringify(response.data));

    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILURE });
    notification.error({
      duration: 8,
      message: "Login Failed!",
      description: "Try again or Register to site",
    });
  }
}

function* logout(action) {
  // mockAdapter.onDelete("/logout").reply(200);
  const axiosClientWithAuth = axios.create({
  
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    timeout: 1000,
    headers: { Accept: "application/json", "Content-Type": "application/json", "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhheWRlbkB1bnN3LmVkdS5hdSIsImlhdCI6MTYwMzk0MzIzMH0.b37PfwlcH_cue6yhgvDt2IiNvhRACf79hTNtacYB94Q" },
  });

  try {
    yield axiosClientWithAuth.post("/admin/auth/logout");
    yield put({ type: actions.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: actions.LOGOUT_FAILURE });
  }
}

function* signup(action) {
  try {
    const response = yield axiosClient.post("/admin/auth/register", action.payload);
    yield put({
      type: actions.SIGNUP_SUCCESS,
      payload: response.data,
    });
    notification.success({
      duration: 8,
      message: "Registration Success!",
      description: "You are registered in my Website!"
    })
  } catch (error) {
    yield put({ type: actions.SIGNUP_FAILURE });
    notification.error({
      duration: 8,
      message: "Registration Failed!",
      description: "Please Try Again!",
    });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
  yield all([takeLatest(actions.LOGOUT, logout)]);
  yield all([takeLatest(actions.SIGNUP, signup)]);
}
