import React from 'react';
import {  createStore,applyMiddleware,compose } from '@reduxjs/toolkit'
// import { alertReducer } from './reducers/alertsReducers';
import { carsReducer } from './reducers/carsReducer';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancer = composeWithDevTools({

// });
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducer = combineReducers({
    //users:userReducer,
    cars:carsReducer,
   // alerts:alertReducer,
})
const store = createStore(
 reducer, composedEnhancer
);

export default store;