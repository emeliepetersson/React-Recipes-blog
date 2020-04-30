import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const NavStyled = styled.nav`
  width: 100%;
  margin: 0 auto 20px;
  background-color: white;
  padding: 10px 0;

  a {
    margin: 0 30px;
    font-size: 18px;
    letter-spacing: 4px;
    font-weight: lighter;
    text-decoration: none;
    color: black;

    &:hover {
      font-size: 17px;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">Hem</Link>
      <Link to="/category/Drinks">Drinkar</Link>
      <Link to="/category/Sweets">Bakverk</Link>
    </NavStyled>
  );
};

export default Nav;
