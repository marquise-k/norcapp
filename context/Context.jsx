import React from 'react';

export const initialState = {
  loggedIn: false,
  setLoggedIn: () => {},
  searchText: '',
  setSearchText: () => {},
};

export const Context = React.createContext(initialState);
