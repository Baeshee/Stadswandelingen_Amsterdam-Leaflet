import { CHANGE_SHOWARCHITECTURE, CHANGE_SHOWCHURCHES, CHANGE_SHOWMUSEA, CHANGE_SHOWART, CHANGE_SHOWWALLART, CHANGE_SHOWMONUMENTS, CHANGE_SHOWSTATIONS, CHANGE_SHOWEATDRINK, CHANGE_CURRENTLOCATION, CHANGE_DARKMODE } from '../actions'

export const showArchitecture = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWARCHITECTURE:    
            return action.payload;
        default:
            return state;
    }
}

export const showChurches = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWCHURCHES:    
            return action.payload;
        default:
            return state;
    }
}

export const showMusea = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWMUSEA:    
            return action.payload;
        default:
            return state;
    }
}

export const showArt = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWART:    
            return action.payload;
        default:
            return state;
    }
}

export const showWallArt = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWWALLART:    
            return action.payload;
        default:
            return state;
    }
}

export const showMonuments = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWMONUMENTS:    
            return action.payload;
        default:
            return state;
    }
}

export const showStations = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWSTATIONS:    
            return action.payload;
        default:
            return state;
    }
}

export const showEatDrink = (state = true, action) => {
    switch(action.type){
        case CHANGE_SHOWEATDRINK:    
            return action.payload;
        default:
            return state;
    }
}

export const currentLocation = (state = {lat: 52.3676, lng: 4.9041, zoom: 13, scrollWheel: true}, action) => {
    switch(action.type){
        case CHANGE_CURRENTLOCATION:    
            return action.payload;
        default:
            return state;
    }
}

export const darkMode = (state = false, action) => {
    switch(action.type){
        case CHANGE_DARKMODE:    
            return action.payload;
        default:
            return state;
    }
}