import React from 'react'

export const initialState = {
  loggedIn: false,
  setLoggedIn: () => {},
  searchText: '',
  setSearchText: () => {},
  Going: false,
  setGoing: () => {},
  updatedCards: false
}

export const Context = React.createContext(initialState)
