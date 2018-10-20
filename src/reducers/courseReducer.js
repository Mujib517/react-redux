import * as actions from '../constants/courseCostants';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actions.CREATE_COURSE:
      const newState = [...state, Object.assign({}, action.course)];
      return newState;

    default:
      return state;
  }
}