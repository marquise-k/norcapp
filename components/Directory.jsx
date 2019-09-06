import React from 'react'
import PropTypes from 'prop-types'
import DirectoryImage from '../assets/directoryimage.png'

const Directory = () => {
  //   const photos = photo.map(photo => (
  //     <img
  //       className="photo-images"
  //       src={photo}
  //       key="photo.toString()"
  //       alt="A picture"
  //     />
  //   ))

  return (
    <div className="card-container">
      <div className="wrapper">
        <img
          className="directory-image"
          src={DirectoryImage}
          alt="The directory"
        />
      </div>
    </div>
  )
}

export default Directory

// Directory.propTypes = {
//   photo: PropTypes.shape({
//     photo: PropTypes.string
//   }).isRequired
// }
