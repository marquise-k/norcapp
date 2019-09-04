import React, { useState } from 'react';

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
