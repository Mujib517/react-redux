import * as actions from '../constants/userContstants';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case actions.GET_USER:
      return action.users;
    default:
      return state;
  }
}