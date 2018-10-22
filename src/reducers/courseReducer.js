import * as actions from '../constants/courseCostants';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actions.CREATE_COURSE:
      const newState = [...state, Object.assign({}, action.course)];
      return newState;

    case actions.DELETE_COURSE:
      const state2 = [...state];
      for (var i = 0; i < state2.length; i++) {
        if (state2[i].title === action.course.title) {
          state2.splice(i, 1);
        }
      }
      return state2;

    default:
      return state;
  }
}