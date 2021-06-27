import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import CardList from '../../components/CardList/CardList';
import { GET_ALL_BOARDS } from '../../graphql/query/board';

const Workspace = (props) => {
  // const {} = useQuery()
  const boardsQuery = useQuery(GET_ALL_BOARDS, {
    variables: {
      input: {
        userId: 1,
      },
    },
  });

  const { data: boards, loading, error } = boardsQuery;
  const board = boards?.getBoards[0];

  console.log(`boardsQuery`, boardsQuery);
  console.log(`loading`, loading);
  console.log(`error`, error);
  console.log(`boards`, boards);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <CardList title="Hi" cards={board.cards} />
    </div>
  );
};

Workspace.propTypes = {};

export default Workspace;
