import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({ card }) => (
  <div className="card-container">
    {card && (
      <div className="wrapper">
        <div className="clash-card">
          <img className="card-image" src={card.photolink} alt="A picture" />
          <h4 className="card-heading">{card.title}</h4>
          <hr className="card-line" />
          <p className="card-description">
            {card.starttime} - {card.endtime}
          </p>
          <p className="card-description">{card.date}</p>
          <p />
          <p className="card-description">{card.Description}</p>
        </div>
      </div>
    )}
    {!card && <p>Have nothing</p>}
  </div>
)

export default Cards

Cards.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    Description: PropTypes.string
  }).isRequired
}
