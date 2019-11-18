import store from './store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app.connect';

const init = () => {
  const AVAILABLE_SORTS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

  ReactDOM.render(
      <Provider store={store}>
        <App
          city={null}
          placeCards={[]}
          actualCities={[]}
          availableSorts={AVAILABLE_SORTS}
          cityFilterClickHandler={() => {}}
          onCardHover={() => {}}/>
      </Provider>, document.getElementById(`root`)
  );
};

init();
