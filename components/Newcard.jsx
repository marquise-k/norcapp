import React from 'react'
import PlusButton from '../assets/plusbutton.png'

const NewCards = () => (
  <div className="card-container">
    <div className="wrapper">
      <div className="clash-card">
        <img className="plus-button" src={PlusButton} alt="The plus button" />
        <h4 className="card-heading">Create New Event</h4>
        <p />
        <p className="card-description">
          Don't see what you're looking for? Organize your own uniquee event for
          your interest.
        </p>
      </div>
    </div>
  </div>
)

export default NewCards
