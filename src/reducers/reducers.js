import { CHANGE_FILTERS, CHANGE_CURRENTLOCATION, CHANGE_TOAST, CHANGE_RELIGIONFILTERS, CHANGE_LOCATIONS } from '../actions'

export const filters = (state = [true, true, true, true, true, true, true, true], action) => {
    switch(action.type){
        case CHANGE_FILTERS:    
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

export const toast = (state = false, action) => {
    switch(action.type){
        case CHANGE_TOAST:    
            return action.payload;
        default:
            return state;
    }
}

export const religionFilters = (state = [true, true, true, true, true, true], action) =>{
    switch(action.type){
        case CHANGE_RELIGIONFILTERS:
            return action.payload;
        default: 
            return state;
    }
}

export const locations = (state = [], action) =>{
    switch(action.type){
        case CHANGE_LOCATIONS:
            return action.payload;
        default: 
            return state;
    }
}