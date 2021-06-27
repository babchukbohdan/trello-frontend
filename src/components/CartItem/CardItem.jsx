import React from 'react';
import PropTypes from 'prop-types';

import './CardItem.css';

const CardItem = ({ title, description }) => (
  <div className="card__item">
    <h3>{title}</h3>
    <div className="card__description">{description}</div>
  </div>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardItem;
