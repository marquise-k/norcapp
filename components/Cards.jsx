import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({ card }) => (
  <div className="card-container">
    {card && (
      <div className="wrapper">
        <div className="clash-card">
          <img src="" alt="" />
          <h4>{card.title}</h4>
          <hr />
          <h6>
            {card.starttime} - {card.endtime}
          </h6>
          <h6>{card.date}</h6>
          <h6>Date</h6>
          <p />
          <p>{card.Description}</p>
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
