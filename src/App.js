import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cards from "./components/Cards";
import firebase from "./components/Firebase";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  conponentDidMount() {
    const ref = firebase.database().ref("user");

    ref.on("value", snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    });
  }

  render() {
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <Cards />
      </div>
    );
  }
}

export default App;
