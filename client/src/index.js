import ReactDOM from 'react-dom';
import React, { Component }  from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import { carsReducer } from './redux/reducers/carsReducer';
import { alertReducer } from './redux/reducers/alertReducer';
   
const rootReducer = combineReducers({
    cars:carsReducer,
    alert:alertReducer,
});

const store = createStore(
  rootReducer,
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
)

export default store;