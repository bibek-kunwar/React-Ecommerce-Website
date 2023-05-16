import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu,CgClose} from "react-icons/cg";

const Nav = () => {
  const Nav = styled.nav`
  .navbar-lists{
    display:flex;
    gap:4.8rem;
    align-items:center;
    .navbar-link{
          &:link,
          &:visited{
            display:inline-block;
            text-decoration:none;
            font-size:1.8rem;
            font-weight:500;
            text-transform:uppercase;
            color:${({ theme }) => theme.colors.black};
            transition:color 0.3s linear;
          }
          &:hover,
          &active,{
            color:${({ theme }) => theme.colors.helper};
          }
    }
  }

  .mobile-navbar-btn{
    display:none;
    background-color:transparent;
    cursor:pointer;
    border:none;

  }
  .mobile-nav-icon[name="close-outline"]{
    display:none;


  }
  .close-outline{
    display:none;
  }
  .cart-trolley--link{
    position:relative;
    .cart-trolley{
      position:relative;
      font-size:3.2rem;

    }
    .cart-total--item{
      width:2.4rem;
      height:2.4rem;
      position:absolute;

      color:#000;
      display:grid;
      place-items:center;
      top:-20%;
      left:70%;
      background-color:${({theme})=>theme.colors.helper}
    }
  }
@media(max-width:${({ theme }) => theme.media.mobile}){
  .mobile-navbar-btn{
    display:inline-block;
    z-index:999;
    border:${({ theme }) => theme.colors.black};
    .mobile-nav-icon{
      font-size:4.2rem;
      color:${({ theme }) => theme.colors.black};
    }
  }
  .active .mobile-navbar-icon{
    display:none;
    font-size:4.2rem;
    position:absolute;
    top:30%;
    right:10%;
    color:${({ theme }) => theme.colors.black};
    z-index:9999
  }
}

`
  return (
    <>
      <Nav>
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link">Home</NavLink>

          </li>
          <li>
            <NavLink to="/product" className="navbar-link ">Product</NavLink>

          </li>
          <li>
            <NavLink to="/about" className="navbar-link ">About</NavLink>

          </li>
          <li>
            <NavLink to="/contact" className="navbar-link ">Contact</NavLink>

            </li>
             <li>
              <NavLink to="/cart" className="navbar-link cart-trolley--link">
                <FiShoppingCart className="cart-trolley" />
                <span className="cart-total--item">10</span>
            </NavLink>

          </li>
          </ul>

          <div className="mobile-navbar-btn">
            <CgMenu name="menu-outline" className="mobile-nav-icon" />
             <CgClose name="close-outline" className="mobile-nav-icon close-outline" />
          </div>
        </div>
        </Nav>
    </>
  )
}

export default Nav