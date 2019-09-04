import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Profile = () => {
  const { loggedIn, setLoggedIn } = useContext(Context);

  const onClick = () => {
    setLoggedIn(!loggedIn);
  };

  if (loggedIn) {
    return (
      <button onClick={onClick} type="button" className="signInButton">
        Sign Out
      </button>
    );
  }

  return (
    <button onClick={onClick} type="button" className="signInButton">
      Sign In
    </button>
  );
};

export default Profile;
