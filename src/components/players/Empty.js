import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Symbol = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 60px;
  margin: 1px;
  transition: background-color 1.5s ease;
  width: 60px;
`;

const Empty = (props) => {
  return <Symbol onClick={() => props.addSymbol(props.turn)}></Symbol>;
};

Empty.propTypes = {
  addSymbol: PropTypes.func.isRequired
};

export default Empty;
