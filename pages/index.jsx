import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardArea from '../components/CardArea'
import Sidebar from '../components/Sidebar'
import './App.css'
import firebase from '../lib/database'
import '../styles.scss'
import NavBar from '../components/NavBar'
import ContextProvider from '../context/ContextProvider'
import Searchbar from './Searchbar'
import Link from 'next/link'

//import 'font-awesome/scss/font-awesome.scss'

const App = ({ cards }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [queryText, setQueryText] = useState('')
  const [search, setSearch] = useState('')

  let filteredCards = this.state.cards

  filteredCards = filteredCards.filter(eachItem => {
    return (
      eachItem['title']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
      eachItem['description']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
    )
  })

  useEffect(() => {
    getInitialProps()
  }, [query])

  return (
    <ContextProvider value={{ loggedIn, setLoggedIn }}>
      <div>
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="main">
          <NavBar />
          <CardArea cards={cards} />
        </div>
      </div>
    </ContextProvider>
  )
}

// eslint-disable-next-line func-names
App.getInitialProps = async function() {
  const result = await new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('cards')
      .get()
      .then(snapshot => {
        const data = []
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            ...doc.data()
          })
        })
        resolve(data)
      })
      .catch(() => {
        reject(new Error('Something went wrong'))
      })
  })
  return { cards: result }
}

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      starttime: PropTypes.string,
      endtime: PropTypes.string,
      Description: PropTypes.string,
      date: PropTypes.string
    })
  ).isRequired
}

export default App
