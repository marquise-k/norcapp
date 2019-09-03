import React, { Component } from "react";
import 'isomorphic-fetch'
import { loadFireBase } from "../lib/database";

//const Cards = ({ title, start_time, end_time, Description }) => {
export default class extends Component { 
constructor() {
  super()
  this.state = {
    cards: []
  }
}
render() {
return (
    <div>
    {(this.state.cards && this.state.cards.length > 0) ? 
    {this.state.cards.map(cards => 
      <img src="" alt="" />
      <h4>{cards.title}</h4>
      <hr />
      <h6>
        {cards.start_time} - {cards.end_time}
      </h6>
      <h6>Date</h6>
      <p></p>
      <p>{cards.Description}</p> )}
      :  <p>Have nothing</p> }
    </div>
);
};

export default Cards;
