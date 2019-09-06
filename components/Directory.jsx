import React from 'react'
import PropTypes from 'prop-types'

const Directory = ({ photo }) => {
  const photos = photo.map(photo => (
    <img
      className="photo-images"
      src={photo}
      key="photo.toString()"
      alt="A picture"
    />
  ))

  return (
    <div className="card-container">
      {photo && <div className="wrapper">{photos}</div>}
      {!photo && <p>Have nothing</p>}
    </div>
  )
}

export default Directory

Directory.propTypes = {
  photo: PropTypes.shape({
    photo: PropTypes.string
  }).isRequired
}
