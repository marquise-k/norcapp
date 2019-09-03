import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from '../components/Cards';
// import firebase from '../components/Firebase';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import './App.css';
import { loadFirebase } from '../lib/database';

export default class App extends Component {
  static async getInitialProps() {
    const firebase = await loadFirebase();
    const result = await new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('cards')
        .limit(10)
        .get()
        .then((snapshot) => {
          const data = [];
          snapshot.forEach((doc) => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          console.log(data);
          resolve(data);
        })
        .catch(() => {
          reject(new Error('Something went wrong'));
        });
    });
    console.log(result);
    return { cards: result };
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        <Searchbar />
        {cards && cards.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            start_time={card.start_time}
            end_time={card.end_time}
          />
        ))}
        <Sidebar />
      </div>
    );
  }
}
