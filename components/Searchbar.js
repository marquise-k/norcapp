import React, { Component } from "react";

class Searchbar extends React.Component {
  render() {
    return (
      <div className="App">
        <form className="search-form">
          <a href="/Dashboard">
            <img
              className="search-icon search-items"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
              alt=""
            ></img>
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
