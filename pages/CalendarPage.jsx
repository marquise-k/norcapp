import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar'
import './App.css'
import firebase from '../lib/database'
import '../styles.scss'
import NavBar from '../components/NavBar'
import ContextProvider from '../context/ContextProvider'
import Searchbar from './Searchbar'
import Directory from '../components/Directory'

const CalendarPage = () => {
  return (
    <>
      <Calendar />
    </>
  )
}
