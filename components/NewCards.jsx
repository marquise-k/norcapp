import React, { useEffect, useRef } from 'react'
import PlusButton from '../assets/plusbutton.png'
import { Context } from '../context/Context'
import { DoneIcon } from '../assets/checkmark-green-sized.png'
import { user } from '../assets'

class NewCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  // const Modal = () => {
  //   const onClick = () => {
  //     setModalState(ModelOpen);
  //   };

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  render() {
    const { showModal } = this.state

    if (showModal) {
      return (
        <div className="card-container">
          <div className="wrapper">
            <div className="clash-card">
              <img className="center-image" src={user} alt="The user image" />
              <input
                className="card-heading"
                id="event-title"
                type="text"
                placeholder="Event title"
              />
              <hr className="card-line" />
              <input
                className="card-description"
                id="event-time"
                type="text"
                placeholder="Event time"
              />
              <input
                className="card-description"
                id="event-date"
                type="text"
                placeholder="Event date"
              />
              <p />
              <input
                className="icard-description"
                id="event-description"
                type="text"
                placeholder="Event description"
              />
              <button onClick={this.toggleModal}>
                <img
                  className="bottom-left-icon"
                  src={DoneIcon}
                  alt="A green checkmark"
                />
              </button>
            </div>
          </div>
        </div>
      )
    }

    //TODO: Update modal so the inputs feed info to firebase db to poulate new card

    return (
      <div className="card-container">
        <div className="wrapper">
          <div className="clash-card">
            <button className="newCardButton" onClick={this.toggleModal}>
              <img
                className="plus-button"
                src={PlusButton}
                alt="The plus button"
              />
            </button>
            <h4 className="card-heading">Create New Event</h4>
            <p />
            <p className="card-description">
              Don't see what you're looking for? Organize your own uniquee event
              for your interest.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewCard
