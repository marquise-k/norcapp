import React, { useContext, Component } from 'react'
import PropTypes from 'prop-types'
import SignUpButton from '../assets/sign-up-button.png'
import GoingButton from '../assets/going-button.png'
import { Context } from '../context/Context'
import SignUp from './SignUp'

const Cards = ({ card }) => {
  // const { Going, setGoing } = useContext(Context)
  // const onClick = () => {
  //   setGoing(!Going)
  // }

  // const returnSignUpButtonArea = () => {
  //   if (Going) {
  //     return (
  //       <button type="button" onClick={onClick}>
  //         <img className="going-button" src={GoingButton} alt="A button" />{' '}
  //       </button>
  //     )
  //   }
  //   return (
  //     <button type="button" onClick={onClick}>
  //       <img className="going-button" src={SignUpButton} alt="A button" />
  //     </button>
  //   )
  // }

  return (
    <div className="card-container">
      {card && (
        <div className="wrapper">
          <div className="clash-card">
            <div className="card-first-row">
              {<SignUp />}
              <img className="card-image" src={card.photolink} alt="Stuff" />
            </div>
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
}

export default Cards

Cards.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    Description: PropTypes.string,
    date: PropTypes.string,
    photolink: PropTypes.string
  }).isRequired
}
