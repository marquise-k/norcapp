import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const Searchbar = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="App">
    <form className="search-form">
      <input
        className="search-bar"
        id="search=bar"
        type="text"
        placeholder="Search"
      />
    </form>
  </div>
);

export default Searchbar;
