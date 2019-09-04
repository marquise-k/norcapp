import React from 'react';

export const initialState = {
  loggedIn: false,
};

export const Context = React.createContext(initialState);
