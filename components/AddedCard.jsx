import React, { useEffect, useRef } from 'react';
import PlusButton from '../assets/plusbutton.png';
import { Context } from '../context/Context';
import DoneIcon from '../assets/checkmark-green-sized.png';
import { user } from '../assets';
import SignUp from './SignUp';

const AddedCard = () => (
  <div className="card-container">
    <div className="wrapper">
      <div className="clash-card">
        <div className="card-first-row">
          <SignUp initialState />
          <img className="card-image" src={user} alt="Stuff" />
        </div>
        <h4 className="card-heading">Jazz Friday</h4>
        <hr className="card-line" />
        <p className="card-description">8:00PM - 10:00PM</p>
        <p className="card-description">Friday, September 13th</p>
        <p />
        <p className="card-description">Time for Jazz</p>
      </div>
    </div>
  </div>
);

export default AddedCard;
