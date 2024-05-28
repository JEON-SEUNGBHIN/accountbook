import { createStore, combineReducers } from "redux";
import spendsReducer from "../modules/spendReducer";

const rootReducer = combineReducers({
  spends: spendsReducer, // 이름을 spends로 설정
});

const store = createStore(rootReducer);

export default store;
