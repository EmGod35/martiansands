import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #0000;
  height: 80px;
  display: flex;
  justify-countent: start;
  margin: 4px;
  ${'' /* justify-content: space-between; */}
  ${'' /* padding: 0.5rem calc((100vw - 1000px) / 2); */}
  ${'' /* padding: 0 5rem; */}
  z-index: 10;
  ${'' /* justify-content: flex-start; */}
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  ${'' /* align-items: center; */}
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: start;
    margin-right: 2.5rem;
    margin-top: 2rem;
    margin-left: 1rem;
    width: 100vw;
    white-space: nowrap;
  /* Second Nav */
  /* margin-right: 24px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;