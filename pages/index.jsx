/* eslint-disable func-names */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardArea from '../components/CardArea';
import Sidebar from '../components/Sidebar';
import './App.css';
import firebase from '../lib/database';
import '../styles.scss';
import NavBar from '../components/NavBar';
import ContextProvider from '../context/ContextProvider';

//import 'font-awesome/scss/font-awesome.scss'

const App = ({ cards }) => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [searchText, setSearchText] = useState('');
	const [newCard, setNewCard] = useState(false);
	const [Going, setGoing] = useState(false);
	const [updatedCards] = useState(false);

	//console.log(loggedIn, searchText, newCard, Going, updatedCards);

	return (
		<ContextProvider
			value={{
				loggedIn,
				setLoggedIn,
				searchText,
				setSearchText,
				Going,
				setGoing,
				updatedCards,
				newCard,
				setNewCard
			}}
		>
			<div>
				<div className="sideBar">
					<Sidebar value="dashboard" />
				</div>
				<div className="main">
					<NavBar />
					<CardArea cards={cards} />
				</div>
			</div>
		</ContextProvider>
	);
};

App.getInitialProps = async function() {
	const result = await new Promise((resolve, reject) => {
		firebase
			.firestore()
			.collection('cards')
			.get()
			.then(snapshot => {
				const data = [];
				snapshot.forEach(doc => {
					data.push({
						id: doc.id,
						...doc.data()
					});
				});
				resolve(data);
			})
			.catch(() => {
				reject(new Error('Something went wrong'));
			});
	});
	return { cards: result };
};

App.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			starttime: PropTypes.string,
			endtime: PropTypes.string,
			Description: PropTypes.string,
			date: PropTypes.string,
			going: PropTypes.bool
		})
	).isRequired
};

export default App;
