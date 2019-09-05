import React, { useEffect, useRef } from 'react'
import PlusButton from '../assets/plusbutton.png'
import { Context } from '../context/Context'
import  Modal  from './Modal'
import { DoneIcon } from '../assets/checkmark-green-sized'
import { user } from '../assets'

class NewCards extends React.Component {
  state = {showModal: false }

  // const Modal = () => {
  //   const onClick = () => {
  //     setModalState(ModelOpen);
  //   };

toggleModal = () => this.setState({ showModal: !this.state.showModal })


render() {
  const { showModal } = this.state;
  return (
{showModal ? (
    <Modal>
<div className="card-container">
      <div className="wrapper">
        <div className="clash-card">
            <img
              className="center-image"
              src={user}
              alt="The user image"
            />
          <input
          className="input-event-title"
          id="event-title"
          type="text"
          placeholder="" />
          <hr className-"card-line" />
          <input
          className="input-event-time"
          id="event-time"
          type="text"
          placeholder="Event time" />
           <input
          className="input-event-date"
          id="event-date"
          type="text"
          placeholder="Event date" />
          <p />
          <input
          className="input-event-description"
          id="event-description"
          type="text"
          placeholder="Event description" />
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
    </Modal>
  ) : null}
  )

  //TODO: Update modal so the inputs feed info to firebase db to poulate new card

  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="clash-card">
          <button onClick={this.toggleModal}
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

export default NewCards
