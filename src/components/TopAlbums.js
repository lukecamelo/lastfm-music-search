import React from 'react'
import Album from './Album'
import './TopAlbums.css'

class TopAlbums extends React.Component {
  render() {
    const { response } = this.props
    let albums

    if (response.length > 0) {
      albums = response.map((obj, i) => {
        return (
          <Album 
          key={i}
          index={i}
          response={obj} />
        )
      })
    }

    return (
      <div className="AlbumContainer">
        {albums}
      </div>
    )
  }
}

export default TopAlbums
