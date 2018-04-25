import React from 'react';
import './TopAlbums.css'

class TopAlbums extends React.Component {
  render() {
    return(
      <div className='AlbumContainer'>
        <div className="picholder">
          <h2>{this.props.title}</h2>
          <img className='albumImg' src={`${this.props.art}`} alt='album'/>
        </div>

        <div className="picholder">
          <h2>{this.props.title2}</h2>
          <img className='albumImg' src={`${this.props.art2}`} alt='album'/>
        </div>

        <div className="picholder">
          <h2>{this.props.title3}</h2>
          <img className='albumImg' src={`${this.props.art3}`} alt='album'/>
        </div>

      </div>
    )
  }
}

export default TopAlbums;