import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to MediCare+ Clinic </p>
            <h1> {name} </h1>
            <p>
              We are on the leading edge of cancer care.
              Providing the full continuum of cancer treatments
              and supportive care services in a single convenient location.
            </p>
            <NavLink>
              <Button>Make an Appointment</Button>
              <Button className="department">Departments</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="./images/heropic.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .intro-data {
      margin: 2rem 0;
      padding: 3rem 0;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #002348;
      p{
        margin: 2rem 0;
        padding: 3rem 0;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        /* line-height: 39px; */
        color: #002348;
      }
    }

    h1 {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 30px;

color: #002348;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
  .department{
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #007DF2;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 30px;
    margin-left: 2rem;

  }

  .hero-section-image {
    width: 80%;
    height: auto;
    border-radius: 32px;
  }
  figure {
    /* height: 650px;
    width: 574px; */
    position: relative;
  }
  .img-style {
    height: 600px;
    width: 530px;
    background: #EBEEFF;
    border-radius: 32px;

    /* width: 60%;
    height: auto; */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .hero-section-data{
      width: 50%;
      display: inline;
      justify-content: start;
      align-items: center;
      h1 {
      font-size: 54px;
      line-height: 50px;
    }
    }
    .grid {
      gap: 10rem;
    }
    .hero-section-image{
      /* width: 20%; */
      display: flex;
      justify-content: center;
      align-items: center;
      
    .img-style {
      height: 300px;
      width: 530px;
     
      background: #EBEEFF;
      border-radius: 32px;

    }
    }
  }
`;

export default HeroSection;
