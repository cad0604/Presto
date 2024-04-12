import { all } from "redux-saga/effects";
import authSaga from "states/auth/saga";

// Here you can include all the saga which you write for components
export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
