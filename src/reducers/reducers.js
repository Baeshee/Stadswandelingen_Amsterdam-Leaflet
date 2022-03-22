import { CHANGE_SHOWARCHITECTURE, CHANGE_SHOWCHURCHES, CHANGE_SHOWMUSEA, CHANGE_SHOWART, CHANGE_SHOWWALLART, CHANGE_SHOWMONUMENTS, CHANGE_SHOWSTATIONS, CHANGE_SHOWEATDRINK } from '../actions'

export const showArchitecture = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWARCHITECTURE:    
            return action.payload;
        default:
            return state;
    }
}

export const showChurches = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWCHURCHES:    
            return action.payload;
        default:
            return state;
    }
}

export const showMusea = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWMUSEA:    
            return action.payload;
        default:
            return state;
    }
}

export const showArt = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWART:    
            return action.payload;
        default:
            return state;
    }
}

export const showWallArt = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWWALLART:    
            return action.payload;
        default:
            return state;
    }
}

export const showMonuments = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWMONUMENTS:    
            return action.payload;
        default:
            return state;
    }
}

export const showStations = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWSTATIONS:    
            return action.payload;
        default:
            return state;
    }
}

export const showEatDrink = (state = "", action) => {
    switch(action.type){
        case CHANGE_SHOWEATDRINK:    
            return action.payload;
        default:
            return state;
    }
}