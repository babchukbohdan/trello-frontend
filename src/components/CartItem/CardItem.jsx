import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import './CardItem.css';

const CardItem = ({ id, index, title, description }) => (
  <Draggable draggableId={id.toString()} index={index}>
    {(provided) => (
      <div
        className="card__item"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
        <h3>{title}</h3>
        <div className="card__description">{description}</div>
      </div>
    )}
  </Draggable>
);

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardItem;
