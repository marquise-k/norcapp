import React from 'react';
import PropTypes from 'prop-types';
import CardArea from '../components/CardArea';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';
import '../styles.scss';

const App = ({ cards }) => (
  <div>
    <div className="sideBar">
      <Sidebar />
    </div>
    <div className="main">
      <Searchbar />
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
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      Description: PropTypes.string,
    })
  ).isRequired,
};

export default App;
