import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { carsReducer } from './reducers/carsReducer';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
    users:userReducer,
})
const store = configureStore(
 {reducer}
);

export default store;