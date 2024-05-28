import { ADD_SPEND, DELETE_SPEND, EDIT_SPEND } from "./action";
import fakeData from "../../resources/fakeData.json";

const initialState = {
  spends: fakeData,
};

// 리듀서
const spendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPEND:
      return {
        ...state,
        spends: [...state.spends, action.payload],
      };
    case DELETE_SPEND:
      return {
        ...state,
        spends: state.spends.filter((spend) => spend.id !== action.payload),
      };
    case EDIT_SPEND:
      return {
        ...state,
        spends: state.spends.map((spend) =>
          spend.id === action.payload.id ? action.payload : spend
        ),
      };
    default:
      return state;
  }
};

export default spendsReducer;
