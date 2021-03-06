import React, { useState, useContext } from 'react';
import PlusButton from '../assets/plusbutton.png';
import { Context } from '../context/Context';
import DoneIcon from '../assets/checkmark-green-sized.png';
import { user } from '../assets';

const NewCard = () => {
  const [showModal, setShowModal] = useState(false);
  const { newCard, setNewCard } = useContext(Context);

  // const Modal = () => {
  //   const onClick = () => {
  //     setModalState(ModelOpen);
  //   };

  const toggleModal = () => {
    if (showModal) {
      setNewCard(!newCard);
    }
    setShowModal(!showModal);
  };

  // const updatesCards = () => {
  //   setNewCard(!newCard);
  // }

  if (showModal) {
    return (
      <div className="card-container">
        <div className="wrapper">
          <div className="clash-card">
            <form>
              <img className="center-image" src={user} alt="The user" />
              <input
                className="card-heading form-field"
                id="event-title"
                type="text"
                placeholder="Event title"
              />
              <hr className="card-line" />
              <input
                className="card-description form-field"
                id="event-time"
                type="text"
                placeholder="Event time"
              />
              <input
                className="card-description form-field"
                id="event-date"
                type="text"
                placeholder="Event date"
              />
              <p />
              <input
                className="card-description form-field-large"
                id="event-description"
                type="text"
                placeholder="Event description"
              />
              <button className="checkmark" onClick={toggleModal} type="submit">
                <img
                  className="green-checkmark"
                  src={DoneIcon}
                  alt="A green checkmark"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // TODO: Update modal so the inputs feed info to firebase db to poulate new card

  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="clash-card">
          <button className="newCardButton" type="button" onClick={toggleModal}>
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
  );
};

export default NewCard;
