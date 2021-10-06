import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + 1;

    case SUB_NUMBER:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
