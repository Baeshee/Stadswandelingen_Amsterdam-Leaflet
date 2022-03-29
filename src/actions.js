export const CHANGE_FILTERS = "CHANGE_FILTERS"
export const CHANGE_RELIGIONFILTERS = "CHANGE_RELIGIONFILTERS"
export const CHANGE_CURRENTLOCATION = "CHANGE_CURRENTLOCATION"
export const CHANGE_DARKMODE = "CHANGE_DARKMODE"

export const changeFilters = filters => ({
    type: CHANGE_FILTERS,
    payload: filters,
})

export const changeCurrentLocation = currentLocation => ({
    type: CHANGE_CURRENTLOCATION,
    payload: currentLocation,
});

export const changeDarkMode = darkMode => ({
    type: CHANGE_DARKMODE,
    payload: darkMode,
});

export const changeReligionFilters = religionFilters => ({
    type: CHANGE_RELIGIONFILTERS,
    payload: religionFilters,
})