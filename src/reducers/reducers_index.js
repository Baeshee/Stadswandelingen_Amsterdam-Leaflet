import { combineReducers } from "redux";
import {showArt, showWallArt, showMusea, showMonuments, showChurches, showArchitecture, showEatDrink, showStations} from './reducers'


export default combineReducers({
    showArt, showWallArt, showMusea, showMonuments, showChurches, showArchitecture,  showEatDrink, showStations
});