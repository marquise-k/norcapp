import React, { useEffect, useState, Component } from 'react';
import Cards from '../components/Cards';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';
import '../styles.scss';

const App = (props) => {
  const { cards } = props;

  return (
    <div>
      <Searchbar />
      {cards
        && cards.map((card, index) => (
          <Cards
            card={card}
            key={index}
          />
        ))}
      <Sidebar />
    </div>
  );
};

// eslint-disable-next-line func-names
App.getInitialProps = async function () {
  // const firebase = await loadFirebase();

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
        resolve(data);
      })
      .catch(() => {
        reject(new Error('Something went wrong'));
      });
  });
  return { cards: result };
};

export default App;
