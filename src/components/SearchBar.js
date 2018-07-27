import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
  const { query, change, submit } = props
  return (
    <div className="SearchForm">
      <form action="" onSubmit={submit} className="searchBar">
        <div className="column">
          <input
            type="text"
            value={query}
            onChange={change}
            placeholder="Artist search"
            className="searchInput"
          />
          <button className="albumButton" onClick={props.click}>
            Show albums!
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
