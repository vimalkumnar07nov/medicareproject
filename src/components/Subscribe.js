import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
// import {NavLink} from "react-router-dom";

const Subscribe = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="container grid-two-column">
                        <div className='head-user'>
                            <h3>Subscribe to Newsletter</h3>
                            <p>We have a wide experience in experience design and strategy</p>
                        </div>
                        <div className="footer-about">
                            <div className="footer-subscribe">
                                <form action="#">
                                    <div className='form-div'>
                                        <input type="email" name="email" className='sub-input' placeholder="Enter your email address" />
                                        <input type="submit" value="send now" className='sub-btn' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1198px;
    height: 478px;
    /* border: 3px solid red; */
    background: #007FF4;
    border-radius: 20px;
    gap: 0;
    .head-user{
        /* border: 3px solid red; */
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        h3{
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 78px;
            padding-top: 1rem;
        }
    }
}

    .footer-about{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    h3 {
      color: #FFFFFF;
      /* margin-bottom: 2.4rem; */
    }
    p {
      color: #FFFFFF;
    }
    .form-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
        background: #FFFFFF;
        border-radius: 10px;
        width: 846px;
        height: 120px;
        input{
            margin-left: 10rem;
            margin-right: 10rem;
            /* border: 3px solid red; */
        }
        .sub-btn{
            position: relative;
            background: #007FF4;
            /* border: 3px solid red; */
            background: #007FF4;
            margin-bottom: 2rem;
            border-radius: 37px; 
        }
    }
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container{
        display: inline;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .form-div{
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        .sub-btn{
            font-size: 2.5rem;
        }
        .sub-input{
            font-size: 2.3rem;
            margin-left: 5rem;
        }
    }
    
    .contact-short {
      /* max-width: 95vw; */
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .head-user{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
    

`;

export default Subscribe;