import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Card = () => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    fetch("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => res.json())
      .then((myData) => setUsers(myData.data));




    // axios
    //   .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
    //   .then((res) => setUsers(res.data));
  }, [])
    
  return (
    <>
      <Wrapper className="section">
        <h2 className="common-heading">What Our Customers Say</h2>
        <div className="container grid grid-two-column">
          {users.slice(0, 2).map((curElem) => {
            {/* const { id, name, image, description } = curElem; */}
            return (
              <div className="card">
                <div className='client-msg'>
                  <p>{curElem.Reviews}</p>
                </div>

                <div className="client-data">
                  <figure>
                    <img src="./images/Oval.png" alt="" />
                  </figure>
                  <div className="client-data-details">
                    <p className='patient'>{ curElem.Name}</p>
                    <p>Patient</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;
  /* background-color: #1f1f1f; */
  background-color: rgba(248, 253, 255, 1);
  .common-heading{
    color: black;
    padding-left: 17rem;
  }
  .container {
    max-width: 120rem;

  }

  .card {
    /* border: 3px solid black; */
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
    border-radius: 20px;
    }
    .client-msg {
      padding: 2rem 1rem;
      border-radius: 10px;
      text-align: left;
      position: relative;
    }
    .client-data{
      display: inline-flex;
      align-items: center;
      justify-items: start;
      justify-content: start;
      flex-direction: row;
      gap: 1.4rem;
      margin-top: -8rem;
    }
    figure{
      padding-bottom: 1rem;
      padding-left: 30px;
        img{
          max-width: 8rem;
          height: 8rem;
          border: 1px solid #979797;
          border-radius: 50%;
          /* border: 0.5rem solid #ced3ff; */
        }
      }
    .client-data-details{
      display: inline;
      justify-content: start;
      align-items: center;
      .patient{
        color: #002348;
        font-style: normal;
        font-weight: 600;
        
      }
      p{
      color: #002348;
      padding-left: 3rem;
      
  }

    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .common-heading{
      padding-left: 3rem;
      font-size: 3rem;
      line-height: 40px;
    }
    .grid {
      gap: 10rem;
    }
  }
  
`;

export default Card;