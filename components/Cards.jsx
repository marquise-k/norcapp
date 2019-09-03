import React, { Component } from 'react';
// import 'isomorphic-fetch';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        {cards && cards.length > 0 ? (
          cards.map((card) => (
            <div>
              <img src="" alt="" />
              <h4>{card.title}</h4>
              <hr />
              <h6>
                {card.start_time} - {card.end_time}
              </h6>
              <h6>Date</h6>
              <p />
              <p>{cards.Description}</p>
            </div>
          ))
        ) : (
          <p>Have nothing</p>
        )}
      </div>
    );
  }
}
