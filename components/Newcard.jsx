import React from 'react'
import PlusButton from '../assets/plus-button.png'

const NewCards = () => (
  <div className="card-container">
    {card && (
      <div className="wrapper">
        <div className="clash-card">
          <img className="plus-button" src={PlusButton} alt="The plus button" />
          <h4 className="card-heading">Create New Event</h4>
          <p />
          <p className="card-description">
            Don't see what you're looking for? Organize your own uniquee event
            for your interest.
          </p>
        </div>
      </div>
    )}
    {!card && <p>Have nothing</p>}
  </div>
)

export default NewCards
