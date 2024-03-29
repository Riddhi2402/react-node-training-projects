import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { counterReducer, userReducer } from './Redux/Reducer/Reducers';

const rootReducer = combineReducers({
  counterReducer,
  userReducer,
});
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
