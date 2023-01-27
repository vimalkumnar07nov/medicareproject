import React from 'react';
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <p className='common-para'>We provide the most full medical services, so every person could
        <br /> heave the oppurtunity to receive qualitative medical help.</p>
      <div className="container grid grid-four-column">
        <div className="card">
          <figure>
            <img src="./images/teeth.svg" alt="teeth pic" />
          </figure>
          <div className="card-data">
            <h3>Dental Care</h3>
            <h4 className='card-btn'>LEARN MORE</h4>

          </div>
        </div>
        <div className="card">
          <figure>
            <img src="./images/lung2.png" alt="Pulmo pic" />
          </figure>
          <div className="card-data">
            <h3>Pulmonary</h3>
            <h4 className='card-btn'>LEARN MORE</h4>

          </div>
        </div>
        <div className="card">
          <figure>
            <img src="./images/neuro.svg" alt="neuro pic" />
          </figure>
          <div className="card-data">
            <h3>Neurological</h3>
            <h4 className='card-btn'>LEARN MORE</h4>

          </div>
        </div>
        <div className="card">
          <figure>
            <img src="./images/predia.svg" alt="predia pic" />
          </figure>
          <div className="card-data">
            <h3>Prediatrics</h3>
            <h4 className='card-btn'>LEARN MORE</h4>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;
    background: #F8FDFF;
  /* background-color: #e1e1e1; */
  .common-heading{
    color: #003B79;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .common-para{
    color: #002348;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
  }
  .container {
    max-width: 120rem;
  }

  .card {
    background: #FFFFFF;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 20px;
    width: 250px;
    height: 323px;
    padding-right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:hover {
      background: #007EF3;
      transform: scale(1.2);
      h4{
        font: 2rem;
        color: white;
        opacity: 1;
      }
    }
    
    .card-data {
      /* padding-left: 2rem; */
      /* position: absolute; */
    }

    h3 {
        margin: 1.5rem;
        color: #002348;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        padding: 0 0 2rem 2rem;
    }
    .card-btn{
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1.8rem;
      padding-left: 2rem;
      padding-bottom: 2rem;
      /* display: none; */
      opacity: 0;
    }
  }

  figure {
    width: auto;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    /* background: #FFFFFF; */
    border-radius: 20px 20px 0px 0px;
    
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 15rem;
      transition: all 0.2s linear;
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .common-para{
      padding-left: 3rem;
      font-size: 25px;
      line-height: 50px;
    }
    .grid {
      gap: 10rem;
    }
  }
`;

export default Services;
