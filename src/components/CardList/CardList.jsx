import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardList.css';

const CardList = ({ cards }) => (
  <div className="cards">
    {cards.map((card) => (
      <Card key={card.id} title={card.title} cardItems={card.cardItems} />
    ))}
  </div>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default CardList;
