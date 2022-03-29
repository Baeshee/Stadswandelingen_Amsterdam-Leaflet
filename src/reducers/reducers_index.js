import { combineReducers } from "redux";
import {currentLocation, darkMode, filters, religionFilters } from './reducers'


export default combineReducers({
    currentLocation, darkMode, filters, religionFilters
});