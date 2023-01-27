import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="container grid grid-two-column">
            <div className="footer-top">
              <div className="footer-about">
                <div>
                  <img src="./images/logo.svg" />
                  </div>
                </div>
            </div>

            {/* Footer Navbar List---------------------**** */}
            <div className="footer-subscribe">
              <Nav>
                  <ul className="navbar-lists">
                    <li>
                      <NavLink
                        to="/"
                        className="navbar-link ">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="navbar-link ">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className="navbar-link ">
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="navbar-link ">
                        News
                      </NavLink>
                    </li>
                  </ul>
              </Nav>
            </div> 
          </div>

          {/* Footer----------Bottom---Section------ */}
          <div className="footer-bottom--section">
            <hr />
            
            <div className="container grid grid-two-column ">

              <div>
                
                <div className="footer-social--icons">
                  <div>
                    <a
                      href="https://www.facebook.com/inkhire/" target="_blank">
                      <FaFacebookF className="icons" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.facebook.com/inkhire/" target="_blank">
                      <BsGoogle className="icons" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      target="_blank">
                      <SiTwitter className="icons" />
                    </a>
                  </div>
                </div>
                <p className="footer-date">
                  @{new Date().getFullYear()} ©2020 PodPayment - {new Date().getFullYear()}
                </p>
              </div>
              
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
padding-top: 5rem;

  footer {
    background: #ECF4FF;
    padding: 5rem 0 9rem 0;
    
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: #667C94;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          background: #F7FBFF;
          font-size: 2.4rem;
          color: #667C94;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;
      .footer-date{
          /* border: 3px solid red; */
          padding-top: 5rem;
        }

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

// Footer Navbar---------------************

const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      justify-content: center;
      

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.button};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .navbar-link{
    font-size: 4rem;
  }
  
  .mobile-navbar-btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.black};

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: #0073FF
    }
  }
}
  `;



export default Footer;
