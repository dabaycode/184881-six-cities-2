import React from 'react';
import Main from "../main/main";
import PlaceCardDetail from '../place-card-detail/place-card-detail'
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";

const getCardDetail = (id, placeCards) => {
  
  const activeCard = placeCards.find((item) => {
    return item.id === id;
  });

  return (<PlaceCardDetail
    title={activeCard.title}
    image={activeCard.image}
    price={activeCard.price}
    rating={activeCard.rating}
    type={activeCard.type}
    mark={activeCard.mark}/>);
}

const App = (props) => {
  const {placeCards} = props;
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id" render={(props)=>{
          {getCardDetail(props.match.params.id, placeCards)}
        }}/>
        <Route path="/">
          <Main placeCards={placeCards} onClickHead= {() => {}}/>;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;