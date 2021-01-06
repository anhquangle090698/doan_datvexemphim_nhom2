import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';
import reportWebVitals from './reportWebVitals';
import { history } from './Util/history';

//Config redux, history, redux-thunk
const store = createStore(rootReducer, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Router history = {history}>
    <Provider store = {store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
