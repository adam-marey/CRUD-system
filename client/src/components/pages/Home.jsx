import React from 'react'
import AddClientmodal from '../components/AddClientmodal'
import AddProjectModal from '../components/AddProjectModal'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <div className='d-flex gap-3 mb-4'>
      <AddClientmodal />
      <AddProjectModal />
      </div>
      <Projects />
      <Clients />
      <hr />
      <Footer />
    </>
  )
}

export default Home
