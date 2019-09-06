import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SignUpButton from '../assets/sign-up-button.png'
import GoingButton from '../assets/going-button.png'
import { Context } from '../context/Context'

const SignUp = () => {
  const { Going, setGoing } = useContext(Context)
  const onClick = () => {
    setGoing(!Going)
  }

  const ButtonArea = children => <div className="ButtonArea">{children}</div>

  if (Going) {
    return ButtonArea(
      <button className="button-sign" type="button-sign" onClick={onClick}>
        <img className="going-button" src={GoingButton} alt="A button" />{' '}
      </button>
    )
  }

  return ButtonArea(
    <button className="button-sign" onClick={onClick}>
      <img className="going-button" src={SignUpButton} alt="A button" />
    </button>
  )
}

export default SignUp
