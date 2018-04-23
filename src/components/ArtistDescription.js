import React from 'react';
import './ArtistDescription.css';
class ArtistDescription extends React.Component {
  // constructor(props) {
  //   super(props) 
  // }
  
  render() {
    return(
      <div className='artistContainer'>
        <h1 className='header'>{this.props.artist}</h1>
        <img className='artistImg' src={`${this.props.image}`} alt='artist'/>
        <p className='description'>{this.props.summary.replace(/<.+>$/, '')}</p>
      </div>
    );
  }
}

export default ArtistDescription;