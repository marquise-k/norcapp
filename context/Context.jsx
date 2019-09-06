import React from 'react'

export const initialState = {
  loggedIn: false,
  setLoggedIn: () => {},
  searchText: '',
  setSearchText: () => {},
  Going: false,
  setGoing: () => {},
  updatedCards: false,
  newCard: false,
  setNewCard: () => {}
}

export const Context = React.createContext(initialState)
