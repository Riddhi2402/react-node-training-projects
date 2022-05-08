import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
import MyButton from './Button';
import MyComponent from './LifeCycle';
import HookExample from './Hooks';
import UseReducer from './Reducer';
import EventHandler from './Events';

ReactDOM.render(
  <React.StrictMode>
    <App roll={100+1} increment={1}/>
    <Clock />
    <MyButton />
    <MyComponent />
    <HookExample />
    <UseReducer />
    <EventHandler />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
