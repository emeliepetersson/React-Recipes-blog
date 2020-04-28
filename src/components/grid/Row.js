import styled from "styled-components";
import PropTypes from "prop-types";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

Row.propTypes = {
  children: PropTypes.any,
};

export default Row;
