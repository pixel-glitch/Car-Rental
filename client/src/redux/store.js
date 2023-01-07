import React from 'react';
import { configureStore, createStore } from '@reduxjs/toolkit'
import { carsReducer } from './reducers/carsReducer';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
    users:userReducer,
})
const store = createStore(
 {reducer}
);

export default store;