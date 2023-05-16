import React from 'react'
import styled  from 'styled-components'

const Trusted = () => {
  return (
    <>
      <Wrapper className="brand-section">
        <div className="container">
          <h3>Trusted by 1000+ companies</h3>
          <div className="brand-section-slider">

            <div className="slide">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-" alt="fasdgkasf" />
            </div>
            <div className="slide">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-" alt="fasdgkasf" />
            </div>
            <div className="slide">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-" alt="fasdgkasf" />
            </div>
            <div className="slide">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-" alt="fasdgkasf" />
            </div>
            <div className="slide">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092022/logo_lounge_entries_2-03.jpg?dISoUm.z.V5fMko1qNKjAHVztOQ9cNZ2&itok=jFUG5XG-" alt="fasdgkasf" />
            </div>

          </div>
        </div>

      </Wrapper>

    </>
  )
}
const Wrapper = styled.section`
 padding:9rem 0;
 background-color:${({theme})=>theme.colors.bg}
.brand-section{
  padding:12rem 0 0 0;
  display:flex;
}

h3{
  text-align:center;
  text-transform:capitalize;
  color:${({theme})=>theme.colors.text}

  font-size:2rem;
  font-weight:bold;

}
img{
  min-width:8rem;
  height:8 rem;
}
.brand-section-slider{
  margin-top:3.2rem;
  display:flex;
  justify-content:space-between;
  align-item:center;
  flex-direction:row;
}
@media(max-width:${({ theme }) => theme.media.mobile}){
  .brand-section-slider{
    margin-top:3.2rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    text-align:center;
  }
}
`

export default Trusted