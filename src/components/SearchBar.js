import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className='SearchForm'>
      <form action="" onSubmit={props.submit} className='searchBar'>

        <input type="text" 
        value={props.query} 
        onChange={props.change} 
        placeholder='Artist search'
        className='searchInput' />

        <button className='albumButton' onClick={props.click}>Show albums!</button>
        
      </form>
    </div>
  )
}

export default SearchBar;