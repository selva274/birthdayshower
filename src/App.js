import React from 'react'
import Card from './Card'
import Upcomming from './Upcomming'
import "./App.css"
const App = () => {
  return (
    <div className='content'>
    <div className='today'>
     <h2>Today</h2>
    <Card/>
    </div>
    <div className='upcomming'>
      <h2>Upcomming</h2>
      <Upcomming/>
    </div>
    </div>
  )
}

export default App