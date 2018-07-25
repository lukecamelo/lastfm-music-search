import React from 'react'
import './TopAlbums.css'

const Album = (props) => {
    return (
        <div className="picholder">
          <h2>{props.response.name}</h2>
          <h3>
            Total plays:{' '}
            {String(props.response.playcount).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
          </h3>
          <img className="albumImg" src={`${props.response.image[3]['#text']}`} alt="album" />
        </div>
    )
}

export default Album