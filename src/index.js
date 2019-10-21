import ReactDOM from 'react-dom';
import App from 'Components/app/app';

const rentListTitles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

const shuffleRentArray = (array) => {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.slice(0, 4);
};

const init = () => {
  ReactDOM.render(<App rentList={shuffleRentArray(rentListTitles)}/>, document.getElementById(`root`));
};

init();
