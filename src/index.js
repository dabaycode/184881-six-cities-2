import store from './store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app.connect';
import {BrowserRouter} from 'react-router-dom';
const init = () => {

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>, document.getElementById(`root`)
  );
};

init();
