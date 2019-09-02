import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Searchbar extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <form className="search-form">
          <a href="/Dashboard">
            <img
              className="search-icon search-items"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
              alt=""
            />
          </a>
          <input
            className="search-bar"
            id="search=bar"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
