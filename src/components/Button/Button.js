import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 330px;
    height: 50px;
    background-color: #E0BFB7;
    border: none;
    margin: 0 auto;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover {
        transform: scale(0.95);
        background-color: #E5C9C2;
    }
`;

const Button = (props) => {
  return <ButtonStyled>{props.children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.string,
};


export default Button;