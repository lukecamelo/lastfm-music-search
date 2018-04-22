import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='SearchForm'>
      <form action="" onSubmit={props.submit} className='searchBar'>

        <input type="text" 
        value={props.query} 
        onChange={props.change} 
        placeholder='Artist search' />
        
      </form>
    </div>
  )
}

export default SearchBar;