import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button/Button";

const CardStyled = styled.a`
  width: 100%;
  height: 500px;
  background-color: white;
  color: black;
  margin: 50px 0 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 8px 14px -7px #c7c7c7;
  text-decoration: none;

  img {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: cover;
    border-radius: 4px;
  }

  .content {
    text-align: left;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;

    h3 {
      margin: 0;
    }
  }
`;

const Card = (props) => {
  return (
    <CardStyled href={props.link} {...props}>
      <img src={props.image} alt={props.alt} />
      <div className="content">
        <div>
          <h3>{props.title}</h3>
          {props.excerpt}
        </div>
        <Button children="läs mer" />
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  excerpt: PropTypes.array,
};

export default Card;
