import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ImgBg from "../assets/images/pizza-3.jpg";
import SideBar from "./SideBar";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroButton>Order Now</HeroButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
  height: 100vh;
  background-size: cover;
`;

const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw-130px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: white;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
