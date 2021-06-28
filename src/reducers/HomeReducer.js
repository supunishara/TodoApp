import { ADD_CARD, REMOVE_CARD, MARK_CARD } from "../actions/types";

const INITIAL_STATE = {
  tasks: [{ title: 'meeting with Saman', isMarked: false }]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    case REMOVE_CARD:
      var array = [...state.tasks];
      array.splice(action.payload.index, 1);
      return {
        ...state,
        tasks: array
      }

    case MARK_CARD:
      var array = [...state.tasks];
      array[action.payload.index] = {...state.tasks[action.payload.index], isMarked: !state.tasks[action.payload.index].isMarked};
      return {
        ...state,
        tasks: array
      }


    default:
      return state;
  }
};
