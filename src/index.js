import createStore from './store/createStore';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from 'Components/app/app.connect';
import rentMockList from './mocks/offers';
import {getActualCities} from './utils';

const init = () => {
  const store = createStore();
  const offers = store
    .getState()
    .app
    .offers;
  const actualCities = getActualCities(offers);
  const AVAILABLE_SORTS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

  ReactDOM.render(
      <Provider store={store}>
        <App
          city={actualCities[0]}
          placeCards={rentMockList}
          actualCities={actualCities}
          availableSorts={AVAILABLE_SORTS}
          cityFilterClickHandler={() => {}}/>
      </Provider>, document.getElementById(`root`)
  );
};

init();
