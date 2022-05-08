import { getUserList } from '../../ApiService/service.js';
import { INCREMENT, DECREMENT, UP, DOWN, GET_USERS } from './type.js';

//Action for FunctionComponent
export const incrementCounter = (counter) => {
  return { type: INCREMENT, payload: counter + 1 };
};

export const decrementCounter = (counter) => {
  return { type: DECREMENT, payload: counter - 1 };
};

//Action for ClassComponent
export const incrementCount = (count) => {
  return { type: UP, payload: count + 1 };
};

export const decrementCount = (count) => {
  return { type: DOWN, payload: count - 1 };
};


//Action for UserTable
export const setUsers = (data) => {
  return { type: GET_USERS, payload: data };
};

export const fetchUsers = () => {
  return (dispatch) => {
      getUserList().then((data) => {
      dispatch(setUsers(data));
    });
  };
};


