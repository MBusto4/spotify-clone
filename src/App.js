
import './App.css';
import Login from './Login';
import React, { useEffect, useState } from "react"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//creating and instance of spotify in our app
const spotify = new SpotifyWebApi()

function App() {

  //use the dataLayer
  const [{ user, token }, dispatch] = useDataLayerValue()

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    //cler the token from the user
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      //giving the token to the spotify api
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])

  // console.log('USER---->', user)
  // console.log("THE TOKEN IS----> ", token)


  return (
    <div className="app">
      {
        token ? (
          //passing a prop to Player Component
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
