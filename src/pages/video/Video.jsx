import React from 'react'
import PlayVideo from '../../component/playVideo/PlayVideo'
import './video.css'
import Recommended from '../../component/recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
     <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video