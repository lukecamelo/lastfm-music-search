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
        
      </form>
    </div>
  )
}

export default SearchBar;