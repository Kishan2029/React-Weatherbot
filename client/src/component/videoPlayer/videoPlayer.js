import React from 'react'
import ReactPlayer from 'react-player'
function VideoPlayer() {
  return (
    <div className='video'>
        <ReactPlayer width='300 px' height='100 px' controls url="https://www.youtube.com/watch?v=xylh_sJAYdc"/>
    </div>
  )
}

export default VideoPlayer;