import React from 'react'
import styled from 'styled-components';
const Contact = () => {
   const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact Pages</h2>
       <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776838658!2d85.28493286815886!3d27.709030242031446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1684049570680!5m2!1sen!2snp"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mpzenlzr" method="POST" className="contact-inputs">
              <input type="text" placeholder='username' name="username" required autocomplete="off" />
              <input type="email" placeholder='email' name="email" required autocomplete="off" />
              <textarea name="message" id="" cols="30" rows="10" required ></textarea>
              <input type="submit" value="send"/>
            </form>
          </div>
        </div>
     </Wrapper>

    </>
  )
}

export default Contact