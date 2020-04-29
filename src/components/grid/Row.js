import styled from "styled-components";
import PropTypes from "prop-types";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.align};
`;

Row.propTypes = {
  children: PropTypes.any,
};

Row.defaultProps = {
  align: "space-around",
};

export default Row;
