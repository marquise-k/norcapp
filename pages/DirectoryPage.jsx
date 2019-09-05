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

const DirectoryPage = ({ photos }) => (
  <div>
    <Directory photos={photos} />
  </div>
)

DirectoryPage.getInitialProps = async function() {
  const result = await new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('photos')
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
  return { photos: result }
}

DirectoryPage.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string
    })
  ).isRequired
}

export default App
