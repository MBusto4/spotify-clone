
import './App.css';
import Login from './Login';
import React, { useEffect, useState } from "react"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

//creating and instance of spotify in our app
const spotify = new SpotifyWebApi()

function App() {
  //creating some state
  const [token, setToken] = useState(null)

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    //cler the token from the user
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
      //giving the token to the spotify api
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        console.log("USER---->", user)
      })
    }
    console.log("THE TOKEN IS----> ", token)
  }, [])
  return (
    <div className="app">
      {
        token ? (
          // <Player />
          <h1>I am Logged in</h1>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
