import ReactDOM from 'react-dom';
import App from 'Components/app/app';

const rentList = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

const init = () => {
  ReactDOM.render(<App rentList={rentList}/>, document.getElementById(`root`));
};

init();
