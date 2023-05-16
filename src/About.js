import React,{useContext} from 'react'
import HeroSection from './Components/HeroSection'
import {AppContext} from './context/productcontext'


const About = () => {
  const {myName} = useContext(AppContext);
  const data = {
    name: "Bibek Ecommerce",
  };
  return (
    <>
      {myName}
    <HeroSection myData={data}/>
    </>
  )
}

export default About