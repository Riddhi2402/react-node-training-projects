const initialState = {
  counter: 0,
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: action.payload };
    case 'DECREMENT':
      return { ...state, counter: action.payload };
    case 'UP':
      return { ...state, count: action.payload };
    case 'DOWN':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const initialUserState = {
  users: [],
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {users: action.payload };
    default:
      return state;
  }
};
