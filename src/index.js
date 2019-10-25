import ReactDOM from 'react-dom';
import App from 'Components/app/app';
import rentMockList from './mocks/offers';


const init = () => {
  ReactDOM.render(<App placeCards={rentMockList}/>, document.getElementById(`root`));
};

init();
