import { combineReducers } from "redux";
import {currentLocation, toast, filters, religionFilters, locations } from './reducers'


export default combineReducers({
    currentLocation, toast, filters, religionFilters, locations
});