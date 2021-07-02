import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import CardItem from '../CartItem/CardItem';
import './Card.css';

const Card = ({ id, title, cardItems }) => {
  // const { data, loading, error, refetch } = useQuery();

  const [items, setitems] = useState(cardItems);

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
      </div>
      <Droppable droppableId={id.toString()}>
        {(provided) => (
          <div className="card__content" {...provided.droppableProps}>
            {cardItems.map(
              (
                { id: cardItemId, title: cardItemTitle, description },
                index
              ) => (
                <CardItem
                  index={index}
                  id={cardItemId}
                  key={cardItemId}
                  title={cardItemTitle}
                  description={description}
                />
              )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="card__footer">
        <button className="card__add-btn" type="button">
          Add item
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};
export default Card;
