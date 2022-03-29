export const CHANGE_SHOWARCHITECTURE = "CHANGE_SHOWARCHITECTURE"
export const CHANGE_SHOWCHURCHES = "CHANGE_SHOWCHURCHES"
export const CHANGE_SHOWMUSEA = "CHANGE_SHOWMUSEA"
export const CHANGE_SHOWART = "CHANGE_SHOWART"
export const CHANGE_SHOWWALLART = "CHANGE_SHOWWALLART"
export const CHANGE_SHOWMONUMENTS = "CHANGE_SHOWMONUMENTS"
export const CHANGE_SHOWSTATIONS = "CHANGE_SHOWSTATIONS"
export const CHANGE_SHOWEATDRINK = "CHANGE_SHOWEATDRINK"
export const CHANGE_CURRENTLOCATION = "CHANGE_CURRENTLOCATION"
export const CHANGE_DARKMODE = "CHANGE_DARKMODE"

export const changeShowArchitecture = showArchitecture => ({
    type: CHANGE_SHOWARCHITECTURE,
    payload: showArchitecture,
});

export const changeShowChurches = showChurches => ({
    type: CHANGE_SHOWCHURCHES,
    payload: showChurches,
});

export const changeShowMusea = showMusea => ({
    type: CHANGE_SHOWMUSEA,
    payload: showMusea,
});

export const changeShowArt = showArt => ({
    type: CHANGE_SHOWART,
    payload: showArt,
});

export const changeShowWallArt = showWallArt => ({
    type: CHANGE_SHOWWALLART,
    payload: showWallArt,
});

export const changeShowMonuments = showMonuments => ({
    type: CHANGE_SHOWMONUMENTS,
    payload: showMonuments,
});

export const changeShowStations = showStations => ({
    type: CHANGE_SHOWSTATIONS,
    payload: showStations,
});
export const changeShowEatDrink = showEatDrink => ({
    type: CHANGE_SHOWEATDRINK,
    payload: showEatDrink,
});

export const changeCurrentLocation = currentLocation => ({
    type: CHANGE_CURRENTLOCATION,
    payload: currentLocation,
});

export const changeDarkMode = darkMode => ({
    type: CHANGE_DARKMODE,
    payload: darkMode,
});