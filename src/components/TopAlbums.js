import React from 'react';
import './TopAlbums.css'

class TopAlbums extends React.Component {
  render() {
    return(
      <div className='AlbumContainer'>
        <h1 className="albumTitle">Most popular album: {this.props.title}</h1>
        <img className='albumImg' src={`${this.props.art}`} alt='album'/>
      </div>
    )
  }
}

export default TopAlbums;