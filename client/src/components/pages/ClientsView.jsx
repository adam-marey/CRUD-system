import React from 'react';
import { useQuery } from '@apollo/client';
import ClientRow from '../components/ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from '../components/Spinner'
import AddClientmodal from '../components/AddClientmodal';
const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p> SOMETHING WENT WRONG</p>;
  return <>
  <AddClientmodal />
  {
    !loading && !error && (
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.clients.map(client => (
              <ClientRow key={client.id} client={client}/>
            ))
          }
        </tbody>
      </table>
    )
  }
  </>
};

export default Clients;