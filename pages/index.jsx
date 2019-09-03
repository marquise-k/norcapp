import React, { useEffect, useState, Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Cards from '../components/Cards';
// import firebase from '../components/Firebase';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';

const App = (props) => {
  console.log('props', props);

  return (
    <div>
      <Searchbar />
      {props.cards &&
        props.cards.map(card => (
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
