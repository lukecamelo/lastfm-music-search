import React from 'react';
import Fade from 'react-reveal';
import './NotFound.css';

const NotFound = () => {
  return(
    <div className='message'>
      <Fade cascade>
      <h1>Oops! you did a uh-oh. Try again.</h1>
      </Fade>
    </div>
  )
}

export default NotFound;