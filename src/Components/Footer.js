import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { FaDiscord,FaInstagram,FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <Button>
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
              <h3>Hey Wellcome to Bibek Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa explicabo rerum nemo beatae obcaecati perferendis sed reprehenderit, quae quibusdam distinctio officiis porro a soluta accusamus nostrum optio ipsa saepe.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Lets connect with us </h3><br></br>
            <form>
              <input type="email" placeholder=" your email" />
              <input type="submit" value="Subscribe"/>
            </form>
            </div>
          <div className="footer-social">
            <h3>follow Us on Twitter</h3><br></br>
            <div className="footer-social--icons">
              <div>
                <FaYoutube className="icons" />
                <FaInstagram className="icons" />
                <FaDiscord className="icons" />
              </div>
            </div>
            </div>
        </div>

    </footer>


    </Wrapper>
  )
}
const Wrapper = styled.section`:
.iSIFGq{
  margin:0;
}
.contact-short{
  max-width:60vw;
  margin:auto;
  padding:5rem 10rem;
  background-color:${({ theme }) => theme.colors.bg};
  border-radius:1rem;
  box-shadow:${({ theme }) => theme.colors.shadowSupport};
  transform:transletY(50%);
  .grid div:list-child{
    justify-self:end;
    align-self:center;
  }
}
footer{
  padding:14rem 0 9rem 0;
  background-color:${({ theme }) => theme.colors.footer_bg};
  h3{
    color:${({ theme }) => theme.colors.hr}
    margin-bottom:2.4rem;
  }
  p{
    color:${({ theme }) => theme.colors.white}
  }
  .footer-social--icons{
    display:flex;
    gap:2rem;
    div{
      padding:1rem;
      border-radius:50%;
      border:2px solid${({ theme }) => theme.colors.white};

    }
    .icons{
      color:{({theme})=>theme.colors.white};
      font-size:2.4rem;
      position:relative;
      cursor:pointer;
    }
  }

}
.footer-bottom--section{
  padding-top:9rem;
  hr{
    margin-bottom:2rem;
    color:${({ theme }) => theme.colors.hr};
    height:0.1px;
  }
}

`

export default Footer