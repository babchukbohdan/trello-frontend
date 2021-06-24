import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './graphql/query/user';

import './App.css';

function App() {
  const { data: users, loading, error, refetch } = useQuery(GET_ALL_USERS);
  console.log(`users`, users);
  console.log(`loading`, loading);
  console.log(`error`, error);

  useEffect(() => {
    // console.log(users.getUsers);
  }, [users]);
  return (
    <>
      <div className="App">Trelloo</div>
      <pre>{JSON.stringify(users?.getUsers, null, 4)}</pre>
    </>
  );
}

export default App;
