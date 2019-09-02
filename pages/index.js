import React from "react";
import ReactDOM from "react-dom";
import "../styles.scss";
import App from "./App";
import { loadDataBase } from "../lib/database.js";
// import * as serviceWorker from './serviceWorker';
// require('./styles.scss');

function Home() {
  return <App />;
}

export default Home;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
