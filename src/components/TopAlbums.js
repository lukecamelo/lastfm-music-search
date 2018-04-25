import React from 'react';

class TopAlbums extends React.Component {
  render() {
    return(
      <div className='AlbumContainer'>
        <h1 className="albumTitle">{this.props.title}</h1>
      </div>
    )
  }
}

export default TopAlbums;