import React from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  return (
    <>
      <div className='title'>
        <h1><span>Snap</span>Shot</h1>
        <p>Find Images</p>
      </div>
      <div className='search'>
        <SearchBar/> 
      </div>
    </>
  )
  }

export default App
