import React from 'react'
import AddClientmodal from '../components/AddClientmodal'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
const Home = () => {
  return (
    <>
    <div className='d-flex gap-3 mb-4'>
      <AddClientmodal />
      </div>
      <Projects />
      <Clients />
      <hr />
    </>
  )
}

export default Home
