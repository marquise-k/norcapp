import React from 'react'
import PropTypes from 'prop-types'
import ContextProvider from '../context/ContextProvider'
import SignUpButton from '../assets/sign-up-button.png'
import GoingButton from '../assets/going-button.png'

const Cards = ({ card }) => {
  // let filteredCards=this.props.cards.filter(
  // (card)=> {
  //   return card.name.indexOf(this.state.search) !== -1;
  // }

  const { signUp, setSignUp } = useContext(Context);

  const onClick = () {
    setSignup(Going);
  };

  if(signUp) {
return CardFormat(
  <div className="card-container">
    {card && (
      <div className="wrapper">
        <div className="clash-card">
        <div className="card-first-row"
        <img classNamw="sign-up-button" src={SignUpButton} alt="A button" />
          <img className="card-image" src={card.photolink} alt="A picture" />
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
 };

    return CardFormat(  <div className="card-container">
    {card && (
      <div className="wrapper">
        <div className="clash-card">
        <div className="card-first-row"
        <img classNamw="going-button" src={GoingButton} alt="A button" />
          <img className="card-image" src={card.photolink} alt="A picture" />
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

export default Cards

Cards.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    Description: PropTypes.string,
    date: PropTypes.string
  }).isRequired
}
