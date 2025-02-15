// eslint-disable-next-line no-unused-vars
import React from 'react'

function Home() {
  return (
    <div id="home-content">
        <h1>Welcome to redux toolkit and asyncThunk demo</h1>
        <p>This is a demo about redux toolkit and asyncThunk,
            in this demo you can see how to use redux toolkit and asyncThunk.
            Redux tool kit is a state management tool that is used to manage the state of the modern application.
        </p>
        <ul>
            <li><a href="/users">Loaded users from asyncThunk</a></li>
            <li><a href="/count">Count counter using redux</a></li>
        </ul>
    </div>
  )
}

export default Home