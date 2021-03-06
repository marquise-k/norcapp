/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';
import '../styles.scss';
import NavBar from '../components/NavBar';
import ContextProvider from '../context/ContextProvider';
import Directory from '../components/Directory';

const DirectoryPage = ({ photos }) => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [searchText, setSearchText] = useState('');

	return (
		<ContextProvider
			// eslint-disable-next-line object-curly-newline
			value={{ loggedIn, setLoggedIn, searchText, setSearchText }}
		>
			<div>
				<div className="sideBar">
					<Sidebar value="directory" />
				</div>
				<div className="main">
					<NavBar />
					{photos &&
						photos.map((photo, index) => (
							<Directory photos={photo} key={index} />
						))}
				</div>
			</div>
		</ContextProvider>
	);
};

// // eslint-disable-next-line func-names
DirectoryPage.getInitialProps = async function() {
	const photoresult = await new Promise((resolve, reject) => {
		firebase
			.firestore()
			.collection('photos')
			.get()
			.then(snapshot => {
				const photodata = [];
				snapshot.forEach(doc => {
					photodata.push({
						id: doc.id,
						...doc.photodata()
					});
				});
				console.log(photodata);
				resolve(photodata);
			})
			.catch(() => {
				reject(new Error('Something went wrong'));
			});
	});
	console.log(photoresult);
	return { photos: photoresult };
};

DirectoryPage.propTypes = {
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			photo: PropTypes.string
		})
	).isRequired
};

export default DirectoryPage;
