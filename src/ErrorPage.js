import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'

const ErrorPage = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div>
            <h2>This is a Error Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti expedita odio necessitatibus odit dolorum at quos dolores recusandae. Corrupti et animi dolorem quibusdam at vel doloribus non excepturi. Ipsam, sapiente?</p>
          </div>

          <Button> Go Back to Home </Button>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
.container{
  padding:9rem 0;
  text-align:center;
  h1{
    font-size:10rem;
  }
  p{
    margin:2rem 0;
  }
}
`;

export default ErrorPage