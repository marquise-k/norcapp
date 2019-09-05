import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import Profile from './Profile';

const NavBar = () => {
  const [query, setQuery] = useState('');

  const searchCards = queryCards => {
    setQuery(queryCards);
  };
  
  return (
    <div className="navBar">
      <Searchbar searchCard={searchCards} />
      <Profile />
    </div>
  );
};

export default NavBar;
