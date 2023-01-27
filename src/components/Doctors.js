import React from 'react';
import styled from "styled-components";

const Doctors = () => {

    return (
        <Wrapper className="section">
            <h2 className="common-heading">We Have The Best Specialist</h2>
            <p className='common-para'>We have a wide experience in experience design and strategy,<br />
                with locally-rooted knowledge.</p>
            <div className="container grid grid-four-column">
                <div className="card">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div className="card-data">
                        <h3>Dr. Awaatif Al</h3>
                        <p className='profession-para'>Dental Care</p>

                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div className="card-data">
                        <h3>Dr. Filipa Gaspar</h3>
                        <p className='profession-para'>Cardiology</p>

                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src=" " alt="" />
                    </figure>
                    <div className="card-data">
                        <h3>Dr. Sukhmeet Gorae</h3>
                        <p className='profession-para'>Neurological</p>

                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div className="card-data">
                        <h3>Dr. Siri Jakobsson</h3>
                        <p className='profession-para'>Prediatrics</p>

                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;
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
    /* width: 274px; */
    .card-data {
      /* padding: 0 2rem; */
    }

    h3 {
        margin: 1.5rem;
        color: #002348;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 54px;
        padding: 0 0 2rem 2rem;
    }
    .profession-para{
        margin-bottom: 3rem;
        padding-left: 2rem;
        color: #002348;
    }
  }

  figure {
   
    width: auto;
    height: 324px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    background: #AED3E2;
    border-radius: 20px 20px 0px 0px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .common-heading{
      padding-left: 5rem;
      font-size: 5rem;
    }
    .common-para{
      padding-left: 3rem;
      font-size: 25px;
      line-height: 40px;
    }
    .grid {
      gap: 10rem;
    }
  }
`;

export default Doctors