import React, { useEffect, useState, Component } from 'react'
import ReactDOM from 'react-dom'
import Cards from '../components/Cards'
// import firebase from '../components/Firebase';
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import './App.css'
import { loadFireBase } from '../lib/database.js'

export default class App extends Component {
  static async getInitialProps() {
    let firebase = await loadFirebase()
    let result = await new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('cards')
        .limit(10)
        .get()
        .then(snapshot => {
          let data = []
          snapshot.forEach(doc => {
            data.push(
              Object.assign(
                {
                  id: doc.id
                },
                doc.data()
              )
            )
          })
          console.log(data)
          resolve(data)
        })
        .catch(error => {
          reject([])
        })
    })
    console.log(result)
    return { cards: result }
  }

  render() {
    const cards = this.props.cards
    return (
      <div>
        <Searchbar />
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            start_time={card.start_time}
            end_time={card.end_time}
          />
        ))}
        <Sidebar />
      </div>
    )
  }
}
