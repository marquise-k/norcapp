import React, { useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import Profile from './Profile';


searchCards(query) {
  this.setState({queryText: query});
}

const NavBar = () => (
  <div className="navBar">
    <Searchbar searchCard={this.searchCards}/>
    <Profile />
  </div>
);

export default NavBar;
