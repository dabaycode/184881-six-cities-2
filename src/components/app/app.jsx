import React from 'react';
import Main from "../main/main";
import PlaceCardDetail from '../place-card-detail/place-card-detail'

const getPageScreen = (props) => {
  const {placeCards} = props;

  const url = location
    .pathname
    .split(`/`);

  switch (url[1]) {
    case `offer`:
      if (/\d+/.test(url[2])) {

        const activeCard = placeCards.find((item) => {
          return item.id === (+ url[2]);
        });

        if(activeCard) {
          return (<PlaceCardDetail
            title={activeCard.title}
            image={activeCard.image}
            price={activeCard.price}
            rating={activeCard.rating}
            type={activeCard.type}
            mark={activeCard.mark}/>);
        }
        
        return `404`;
      }
    default:
      return <Main placeCards={placeCards} onClickHead= {() => {}}/>;
  }
}

const App = (props) => {
  return (
    <React.Fragment>{getPageScreen(props)}</React.Fragment>
  );

};

export default App;
