import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Searchbar = () => {
  const { setSearchText } = useContext(Context)

  const updateSearch = e => {
    setSearchText(e.target.value)
  }

  const getSearch = e => {
    // e.preventDefault()
    setSearchText(e.target.value)
    // setSearch(''); // set search back to empty string
  }

  return (
    <div className="search-area">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          id="search-bar"
          type="text"
          placeholder="Search"
          // value={search}
          onChange={updateSearch}
        />
      </form>
    </div>
  )
}
export default Searchbar
