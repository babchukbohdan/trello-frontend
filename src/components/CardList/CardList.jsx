import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Card from '../Card/Card';

import './CardList.css';

const onDragEnd = (params) => {};

const CardList = ({ cards }) => (
  <div className="cards">
    <DragDropContext onDragEnd={onDragEnd}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          cardItems={card.cardItems}
        />
      ))}
    </DragDropContext>
    <button type="button">Add another list</button>
  </div>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default CardList;
