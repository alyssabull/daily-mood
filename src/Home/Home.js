import React, { useState, useEffect } from 'react'
import { colors } from './colors'
import LogoutButton from '../LogoutButton/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";
import './Home.scss'

const Home = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const [backgroundColor, setBackgroundColor] = useState('red')
  const [browserSize, updateBrowserSize] = useState({height: Math.ceil(document.documentElement.clientHeight/60), width: Math.ceil(document.documentElement.clientWidth/60)})
  
  useEffect(() => {
    window.addEventListener('resize', updateBrowserSize({height: Math.ceil(document.documentElement.clientHeight/60), width: Math.ceil(document.documentElement.clientWidth/60)}))
    let color = ['red', 'yellow', 'green', 'purple', 'blue', 'orange', 'tan', 'pink']
    let randomColor = Math.floor(Math.random() * color.length)
    setBackgroundColor(color[randomColor])
  }, [])

  const boxContainerStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${browserSize.width}, 60px)`,
    position: 'absolute'
  }

  const generateBoxes = () => {
    let boxNum = browserSize.height * browserSize.width
    let boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(<div className={`box ${i} ${generateRandomColor()}`} key={`box-${i}`}></div>)
    }
    return boxes
  }

  const generateRandomColor = () => {
    let randomIndex = Math.floor(Math.random() * 4)
    let colorPalette = colors[backgroundColor][randomIndex]
    return colorPalette
  }

  const verifyAuthentication = () => {
    !isAuthenticated ? loginWithRedirect() : alert(`Welcomet to the app ${user.name}!`)
  }

  return(
    <div className='home-container'>
    <div className='box-container' style={ boxContainerStyles }>
      {generateBoxes()}
    </div>
    <div className='title-container'>
      <h1 className='title'>Daily Mood</h1>
      <button className='enter-button' onClick={verifyAuthentication}>
        <span>ENTER</span>
      </button>
      {isAuthenticated && <LogoutButton />}
    </div>
  </div>
  )
}

export default Home