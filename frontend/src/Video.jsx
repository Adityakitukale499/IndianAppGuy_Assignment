import React from 'react'
import './Video.css'
const Video = ({id}) => {
  return (
    <div className='videocon'>
        <iframe className='video' src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Video