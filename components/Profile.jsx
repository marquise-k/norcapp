import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { user } from '../assets'

const Profile = () => {
  const { loggedIn, setLoggedIn } = useContext(Context)
  const onClick = () => {
    setLoggedIn(!loggedIn)
  }

  const profileArea = children => <div className="profileArea">{children}</div>

  if (loggedIn) {
    return profileArea(
      <div className="signedInArea">
        <img src={user} className="signedInImage" alt="Profile" />
        <button onClick={onClick} type="button" className="signInButton">
          Sign Out
        </button>
      </div>
    )
  }

  return profileArea(
    <button onClick={onClick} type="button" className="signInButton">
      Sign In
    </button>
  )
}

export default Profile
