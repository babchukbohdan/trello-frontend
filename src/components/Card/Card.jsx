import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '../CartItem/CardItem';
import './Card.css';

const Card = ({ title, cardItems }) => (
  // const { data, loading, error, refetch } = useQuery();
  <div className="card">
    <div className="card__header">
      <h2 className="card__title">{title}</h2>
    </div>
    <div className="card__content">
      {cardItems.map(({ id, title: cardItemTitle, description }) => (
        <CardItem key={id} title={cardItemTitle} description={description} />
      ))}
    </div>
    <div className="card__footer">
      <button className="card__add-btn" type="button">
        Add item
      </button>
    </div>
  </div>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};
export default Card;
