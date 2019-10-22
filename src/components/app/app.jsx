import React from 'react';
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {rentList} = props;

  return (
    <Main rentList={rentList} onClickHead = {() => {}}/>
  );

};

App.propTypes = {
  rentList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
