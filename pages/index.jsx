import React from 'react';
import PropTypes from 'prop-types';
import CardArea from '../components/CardArea';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';
import '../styles.scss';
import NavBar from '../components/NavBar';

const App = ({ cards }) => (
  <div>
    <div className="sideBar">
      <Sidebar />
    </div>
    <div className="main">
      <NavBar />
      <CardArea cards={cards} />
    </div>
  </div>
);

// eslint-disable-next-line func-names
App.getInitialProps = async function() {
  const result = await new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('cards')
      .limit(10)
      .get()
      .then(snapshot => {
        const data = [];
        snapshot.forEach(doc => {
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

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      starttime: PropTypes.string,
      endtime: PropTypes.string,
      Description: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
};

export default App;
