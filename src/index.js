import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from 'Components/app/app';
import rentMockList from './mocks/offers';
import {reducer} from './reducer';
import {getActualCities} from './utils';

const init = () => {
  const store = createStore(reducer);
  const offers = store.getState().offers;
  const actualCities = getActualCities(offers);

  ReactDOM.render(
    <Provider store={store}>
      <App city={actualCities[0]} placeCards={rentMockList} actualCities={actualCities} cityFilterClickHandler={()=>{}}/>
    </Provider>, document.getElementById(`root`));
};

init();
