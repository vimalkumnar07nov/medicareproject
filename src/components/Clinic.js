import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const Clinic = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="hero-section-data">
                        <h1>Clinic With Innovative</h1>
                        <p>
                            We provide the most full medical services, so every person could
                            heave the oppurtunity to receive qualitative medical help.
                        </p>
                        <NavLink>
                            <Button>Learn More</Button>
                        </NavLink>
                    </div>
                    <div className='clinic-pic2'>
                        <div className="hero-section-image">
                            <figure>
                                <img
                                    src="./images/drgirl.png"
                                    alt="hero-section-photo"
                                    className="img-style1"
                                />
                                <p>Qualified Doctors</p>
                            </figure>
                        </div>
                        <div className="hero-section-image">
                            <figure>
                                <img
                                    src="./images/ambulance.png"
                                    alt="hero-section-photo"
                                    className="img-style2"
                                />
                                <p>24 Hours Service</p>
                            </figure>
                        </div>
                    </div>
                    <div className='clinic-pic1'>
                        <div className="hero-section-image">
                            <figure>
                                <img
                                    src="./images/drmale.png"
                                    alt="hero-section-photo"
                                    className="img-style3"
                                />
                                <p>Emergency Care</p>
                            </figure>
                        </div>
                    </div>
                            
                        
                    
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: #FFFFFF;

  img {
    min-width: 10rem;
    height: 10rem;
    /* padding: 1rem; */
  }
    .clinic-pic2{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 15rem;
        
    }
    .clinic-pic1{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        /* gap: 5rem; */
        
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
        font-size: 45px;
        line-height: 50px;
        color: #002348;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 282px;
    height: 236px;
    border-radius: 32px;
    /* border: 3px solid green; */
    /* column-gap: 20px; */
    background: #FFFFFF;
    padding-bottom: 5rem;
    position: relative;
    
  }
  figure {
    height: 238px;
    width: 233px;
    padding-left: 5rem;

    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 20px;
  }
  .img-style1 {
    /* border: 3px solid blue; */
    width: 130px;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 50%;

  }
  .img-style2 {
    width: 130px;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 50%;
  }
  .img-style3 {
    width: 130px;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    p{
      font-size: 25px;
      line-height: 40px;
    }
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Clinic;