/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import DirectoryImage from '../assets/calendarimage.png';

const Directory = ({ photos }) => (
	<div className="card-container">
		<div className="wrapper">
			<img
				className="photo-images"
				src={photos.photo}
				key="photo.toString()"
				alt="Building habitants"
			/>
		</div>
	</div>
);

Directory.propTypes = {
	photos: PropTypes.shape({
		photo: PropTypes.string
	}).isRequired
};

export default Directory;
