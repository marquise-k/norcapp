import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';

const CardArea = ({ cards }) => (
  <>
    {cards && cards.map((card, index) => <Cards card={card} key={index} />)}
  </>
);

export default CardArea;

CardArea.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      Description: PropTypes.string,
    }),
  ).isRequired,
};
