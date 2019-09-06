import React from 'react'
import PropTypes from 'prop-types'
import { Context } from './Context'

const ContextProvider = ({ children, value }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
)

export default ContextProvider

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    loggedIn: PropTypes.bool,
    setLoggedIn: PropTypes.func,
    setGoing: PropTypes.func,
    Going: PropTypes.bool,
    updatedCards: PropTypes.bool
  }).isRequired
}
