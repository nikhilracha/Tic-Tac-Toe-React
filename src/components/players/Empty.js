import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { setSymbol } from '../../actions/gameActions';

export const Symbol = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 60px;
  margin: 1px;
  transition: background-color 1.5s ease;
  width: 60px;
`;

const Empty = (props) => {
  console.log("Props in Empty", props);



  return <Symbol onClick={() => !props.data.won && props.setSymbol(props)}></Symbol>;
};

Empty.propTypes = {
  addSymbol: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSymbol: (task) => dispatch(setSymbol(task)),
  };
};
export default connect(null, mapDispatchToProps)(Empty);
