import React from 'react';

export const initialState = {
  loggedIn: false,
  setLoggedIn: () => {},
};

export const Context = React.createContext(initialState);
