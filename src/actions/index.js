import { ADD_CARD, REMOVE_CARD, MARK_CARD } from "./types";


//action for adding task to Reducer
export const addTask = value => {
  return {
    type: ADD_CARD,
    payload: {
      title: value,
      isMarked: false
    }
  };
}

//action for remove task from reducer
export const removeTask = index => {
  return {
    type: REMOVE_CARD,
    payload: {
      index: index
    }
  };
}

//action for mark task as completed from reducer
export const markTask = index => {
  return {
    type: MARK_CARD,
    payload: {
      index: index
    }
  };
}
