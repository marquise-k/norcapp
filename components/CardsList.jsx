import { React, Component } from 'react';
import { Context } from '../context/Context';
import Cards from './Cards';

class CardsList extends Component {
    constructor() {
        super();
        this.state = {
            queryText: ''
        };

        this.searchCards = this.searchCards.bind(this);
    };

let filteredCards = this.state.cards;

filteredCards = filteredCards.filter(eachItem => {
  return(
    eachItem['title']
    .toLowerCase()
    .includes(this.state.queryText.toLowerCase()) ||
    eachItem['description']
    .toLowerCase()
    .includes(this.state.queryText.toLowerCase())

  )
})

  let filteredCards = this.state.cards;
    render( {
        return (
            <div>
            <ul>{this.props.cards.map((card)=>{return <Card card={card} key={card.id})/>})}</ul>
            </div>
        )
    }

}