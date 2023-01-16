import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone

    }
  }
`;
const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>LOADING....</p>;
  if (error) return <p> SOMETHING WENT WRONG</p>;
  return <>
  {
    !loading && !error && <h1>Clients</h1>
  }
  </>
};

export default Clients;
