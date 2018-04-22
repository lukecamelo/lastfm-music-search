import React from 'react';
import Fade from 'react-reveal';
import './NotFound.css';

const NotFound = () => {
  return(
    <div className='message'>
      <Fade cascade>
      <h1>Nothing to see here!</h1>
      </Fade>
    </div>
  )
}

export default NotFound;