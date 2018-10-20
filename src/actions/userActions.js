import * as actions from '../constants/userContstants';
import axios from 'axios';

export function getUsersSuccess(users) {
  return { type: actions.GET_USER, users };
}


export function getUsers() {
  return function (dispatch) {
    axios.get("http://api.github.com/users")
      .then(res => dispatch(getUsersSuccess(res.data)))
      .catch(err => console.log(err));
  }
}