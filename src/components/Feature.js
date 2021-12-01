import React from "react";
import styled from "styled-components";
import FeaturePic from "../assets/images/featured3.jpg";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;

const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: #fff;
  }
  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #fff;
  }
`;

const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: white;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
