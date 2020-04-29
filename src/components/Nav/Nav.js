import React from "react";
import styled from "styled-components";

const NavStyled = styled.nav`
  width: 100%;
  margin: 0 auto 30px;
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
      border-bottom: 1px solid grey;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <a href="/">Hem</a>
      <a href="/category/Drinks">Drinkar</a>
      <a href="/category/Sweets">Bakverk</a>
    </NavStyled>
  );
};

export default Nav;
