import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavStyled>
        <StyledNavLink to="/">Pizza</StyledNavLink>
      </NavStyled>
    </>
  );
}

export default Navbar;

const NavStyled = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 2rem;
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
