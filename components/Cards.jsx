/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
// import 'isomorphic-fetch';

export default class extends Component {
  render() {
    console.log(this.props)
    const { card } = this.props

    return (
      <div>
        {card && (
          <div>
            <img src="" alt="" />
            <h4>{card.title}</h4>
            <hr />
            <h6>
              {card.starttime} - {card.endtime}
            </h6>
            <h6>Date</h6>
            <p />
            <p>{card.Description}</p>
          </div>
        )}
        {!card && <p>Have nothing</p>}
      </div>
    )
  }
}
