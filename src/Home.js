import React from 'react'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import FeatureProducts from './Components/FeatureProducts';
const Home = () => {
  const data = {
    name:"Bibek Store",
  }
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted/>
    </>
  )
}


export default Home