import React from 'react';
import './ArtistDescription.css';
class ArtistDescription extends React.Component {
  constructor(props) {
    super(props) 
  }
  
  render() {
    return(
      <div className='artistContainer'>
        <h1>{this.props.artist}</h1>
        <img src={`${this.props.image}`} alt='artist'/>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

export default ArtistDescription;