import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'
import NewCards from './NewCards'
import { Context } from '../context/Context'

// const filteredCards = filteredCards.filter(eachItem => {
//   return (
//     eachItem['title']
//       .toLowerCase()
//       .includes(this.state.queryText.toLowerCase()) ||
//     eachItem['description']
//       .toLowerCase()
//       .includes(this.state.queryText.toLowerCase())
//   )
// })

const CardArea = ({ cards }) => {
  const { searchText } = useContext(Context)
  const [filteredCards, setFilterCards] = useState(
    cards.filter(
      card =>
        card.title.toLowerCase().includes(searchText.toLowerCase()) ||
        card.Description.toLowerCase().includes(searchText.toLowerCase())
    )
  )

  return (
    <div className="card-area">
      <NewCards />
      {filteredCards &&
        filteredCards.map((card, index) => <Cards card={card} key={index} />)}
    </div>
  )
}

export default CardArea

CardArea.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      Description: PropTypes.string
    })
  ).isRequired
}
