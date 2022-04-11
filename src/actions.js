export const CHANGE_FILTERS = "CHANGE_FILTERS"
export const CHANGE_RELIGIONFILTERS = "CHANGE_RELIGIONFILTERS"
export const CHANGE_CURRENTLOCATION = "CHANGE_CURRENTLOCATION"
export const CHANGE_TOAST = "CHANGE_TOAST"
export const CHANGE_LOCATIONS = "CHANGE_LOCATIONS"

export const changeFilters = filters => ({
    type: CHANGE_FILTERS,
    payload: filters,
})

export const changeCurrentLocation = currentLocation => ({
    type: CHANGE_CURRENTLOCATION,
    payload: currentLocation,
});

export const changeToast = toast => ({
    type: CHANGE_TOAST,
    payload: toast,
});

export const changeReligionFilters = religionFilters => ({
    type: CHANGE_RELIGIONFILTERS,
    payload: religionFilters,
})

export const changeLocations = locations => ({
    type: CHANGE_LOCATIONS,
    payload: locations,
})