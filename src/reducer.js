export const initialState = {
    user: null,
    playList: [],
    isPlaying: false,
    item: null,
    //remove after developing allows us to stay logged in
    token: 'BQCbb0ZJf5Ho3PRcB0BDWGzk5N4l0XyGYdVbzdAvHw4uCnSqCDm3DBikP2qCeBLkhd2_BGdwChrFnehGdpOdH5dz4YGlTamZVKlGvaRzP8wfe0RDndnmXYxO3qHv7-wrw-E1SopVzG03-6rrrqq0jJfi7-sHEl-P-fyhKU2e2CakB3pY1L72'
}

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }

}

export default reducer