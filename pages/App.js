import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from '../components/Cards';
// import firebase from '../components/Firebase';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  // componentDidMount() {
  //   const ref = firebase.database().ref('user');

  //   ref.on('value', snapshot => {
  //     let FBUser = snapshot.val();
  //     this.setState({ user: FBUser });
  //   });
  // }

  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const response = await fetch(

  //   )

  render() {
    return (
      <div>
        <Searchbar />
        <Cards />
        <Sidebar />
      </div>
    );
  }
}

export default App;
