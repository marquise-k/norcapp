import React from 'react'

const Searchbar = () => {
  const updateSearch = e => {
    setQueryText(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQueryText(search)
    setSearch('') // set search back to empty string
  }

  return (
    <div className="search-area">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          id="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearch}
        />
      </form>
    </div>
  )
}
export default Searchbar
