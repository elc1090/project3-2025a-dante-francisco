import React from 'react'
import WelcomeMessage from '../layouts/WelcomeMessage'
import Header from '../layouts/Header'
import RoleBasedRoadmaps from '../layouts/RoleBasedRoadMaps'
import Footer from '../layouts/Footer'

const HomePage = () => {
  return (
    <>
    <Header></Header>
    <WelcomeMessage></WelcomeMessage>
    <RoleBasedRoadmaps></RoleBasedRoadmaps>
    <Footer></Footer>
    </>
  )
}

export default HomePage