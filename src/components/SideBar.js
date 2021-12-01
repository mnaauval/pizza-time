import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizzas</SideBarLink>
        <SideBarLink to="/">Drinks</SideBarLink>
        <SideBarLink to="/">All Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000;
`;

const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SideBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SideBarRoute = styled(NavLink)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    transition: 0.2s ease-in-out;
    color: #010606;
  }
`;
