import PropTypes from "prop-types";
import Main from "Components/main/main";

const App = (props) => {
  const {rentList} = props;

  return (
    <Main rentList={rentList}/>
  );

};

App.propTypes = {
  rentList: PropTypes.array,
};

export default App;
