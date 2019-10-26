import React from 'react';
import Main from "../main/main";
import PlaceCardDetail from '../place-card-detail/place-card-detail'

const getPageScreen = (props) => {
  const {placeCards} = props;
  switch (location.pathname) {
    case `/`:
      return <Main placeCards={placeCards} onClickHead= {() => {}}/>;
    case `/offer`:
      return <PlaceCardDetail placeCard={placeCards[0]}/>;
  }
}

const App = (props) => {
  return (
    <React.Fragment>{getPageScreen(props)}</React.Fragment>
  );

};

export default App;
