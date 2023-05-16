import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import Nav from './Nav'

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink>
          {/* <img src="./images/logo.png" alt="logo_image" /> */}
          <h3>
          BIBEK STORE
          </h3>
        </NavLink>
        <Nav/>
      </MainHeader>
    </>
  )
}
const MainHeader = styled.header`
padding:0 4.8rem;
height:10rem;
background-color${({ theme }) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
.logo{
  height:5rem;

}
@media(max-width:${({ theme }) => theme.media.mobile}){
.mobile-navbar-btn{
  display:inline-block;
  z-index:9999;
  border${({ theme }) => theme.colors.black};

}
}


`

export default Header