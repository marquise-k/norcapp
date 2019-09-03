import React from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  render() {
    console.log(this.props)
    const { card } = this.props

    return (
      <div className="card-container">
        <div className="wrapper" />
        <div className="clash-card" />
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
const Cards = ({ card }) => (
  <div>
    {card && (
      <div>
        <img src="" alt="" />
        <h4>{card.title}</h4>
        <hr />
        <h6>
          {card.start_time} - {card.end_time}
        </h6>
        <h6>Date</h6>
        <p />
        <p>{card.Description}</p>
      </div>
    )}
    {!card && <p>Have nothing</p>}
  </div>
);

export default Cards;

Cards.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
};
