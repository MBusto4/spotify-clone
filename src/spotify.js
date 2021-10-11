// How we communicate with the spotify API for login

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"
const clientId = '9c2f3d3564c54afaa952b90af61b1ae4'

//these are what the user can do on our app
//allows u to get the correct permissions from spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//pulling access token out from url
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //#accessToken=mysecretkey&name=mike&
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
