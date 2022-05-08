import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createElement as e } from "react";

ReactDOM.render(
  e(React.StrictMode, null, e(App, {toWhat:'World'}, null)),
  document.getElementById('root')
);
