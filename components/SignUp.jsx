import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignUpButton from '../assets/sign-up-button.png';
import GoingButton from '../assets/going-button.png';
// import { Context } from '../context/Context';

const SignUp = ({ initialState }) => {
  // const { Going, setGoing } = useContext(Context)
  const [Going, setGoing] = useState(initialState);
  const onClick = () => {
    setGoing(!Going);
  };

  const ButtonArea = children => <div className="ButtonArea">{children}</div>;

  return ButtonArea(
    <button className="button-sign" type="button" onClick={onClick}>
      <img
        className="going-button"
        src={Going ? GoingButton : SignUpButton}
        alt="A button"
      />
    </button>
  );

  // return ButtonArea(
  //   <button className="button-sign" type="button" onClick={onClick}>
  //     <img className="going-button" src={SignUpButton} alt="A button" />
  //   </button>
  // );
};

SignUp.propTypes = {
  initialState: PropTypes.bool,
};

SignUp.defaultProps = {
  initialState: false,
};

export default SignUp;
