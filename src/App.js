
import './App.css';
import Login from './Login';
import React, { useEffect, useState } from "react"
import { getTokenFromUrl } from './spotify';

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
