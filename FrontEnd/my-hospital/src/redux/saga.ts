import { userSaga } from "./user/saga";
import {all} from "redux-saga/effects";


export function* rootSaga(){
    yield all([userSaga()]);
}