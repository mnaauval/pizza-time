import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <NavbarContainer>
      <StyledNavLink to="/">Pizza Hot</StyledNavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
const NavIcon = styled.div`
  display: block;
  color: white;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  p {
    font-weight: bold;
    font-size: 1.2rem;
    transform: translate(-175%, 100%);
  }
`;
const Bars = styled(FaPizzaSlice)`
  transform: translate(-50%, -15%);
  font-size: 2rem;
`;
