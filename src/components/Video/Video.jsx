import React from 'react'
import './Video.css'
import front from './Video.mp4'


const Video = () => {
  return (
    <div className='main'>
    <video src={front} autoPlay loop muted />
    </div>
  )
}

export default Video
