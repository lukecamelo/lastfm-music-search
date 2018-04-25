import React from 'react';
import './TopAlbums.css'

class TopAlbums extends React.Component {
  render() {
    return(
      <div className='AlbumContainer'>
        <div className="picholder">
          <h2>{this.props.title}</h2>
          <h3>{String(this.props.playcount).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h3>
          <img className='albumImg' src={`${this.props.art}`} alt='album'/>
        </div>

        <div className="picholder">
          <h2>{this.props.title2}</h2>
          <h3>{String(this.props.playcount2).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h3>
          <img className='albumImg' src={`${this.props.art2}`} alt='album'/>
        </div>

        <div className="picholder">
          <h2>{this.props.title3}</h2>
          <h3>{String(this.props.playcount3).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</h3>
          <img className='albumImg' src={`${this.props.art3}`} alt='album'/>
        </div>

      </div>
    )
  }
}

export default TopAlbums;