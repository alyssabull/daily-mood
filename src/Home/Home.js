import React, { useState } from 'react'
import './Home.scss'

const Home = () => {
  const [browserSize, updateBrowserSize] = useState({height: Math.ceil(document.documentElement.clientHeight/60), width: Math.ceil(document.documentElement.clientWidth/60)})
  
  const boxContainerStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${browserSize.width}, 60px)`,
    position: 'absolute'
  }

  const generateBoxes = () => {
    let boxNum = browserSize.height * browserSize.width
    let boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(<div className={`box ${i}`}></div>)
    }
    return boxes
  }

  return(
    <div className='home-container'>
    <div className='box-container' style={ boxContainerStyles }>
      {generateBoxes()}
    </div>
    <div className='title-container'>
      <h1 className='title'>Daily Mood</h1>
      <button className='enter-button'>ENTER</button>
    </div>
  </div>
  )
}

export default Home