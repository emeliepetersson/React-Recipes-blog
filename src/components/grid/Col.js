import PropTypes from "prop-types";
import styled from "styled-components";

const Col = styled.div`
  width: ${(props) => props.size}%;
  min-width: 400px;
  display: flex;
  justify-content: center;
`;

Col.propTypes = {
  size: PropTypes.number,
};

Col.defaultProps = {
  size: 100,
};

export default Col;
