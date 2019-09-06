import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import './App.css'
import firebase from '../lib/database'
import '../styles.scss'
import NavBar from '../components/NavBar'
import ContextProvider from '../context/ContextProvider'
import Calendar from '../components/Calendar'

const CalendarPage = ({ calendarimage }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [searchText, setSearchText] = useState('')

  return (
    <ContextProvider
      value={{ loggedIn, setLoggedIn, searchText, setSearchText }}
    >
      <div>
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="main">
          <NavBar />
          <Calendar calendarimage={calendarimage} />
        </div>
      </div>
    </ContextProvider>
  )
}

// eslint-disable-next-line func-names

export default CalendarPage
