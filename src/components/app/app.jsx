import React from 'react';
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {placeCards} = props;

  return (
    <Main placeCards={placeCards} onClickHead = {() => {}}/>
  );

};

App.propTypes = {
  placeCards: PropTypes.array.isRequired,
};

export default App;
