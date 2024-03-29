import Main from '../main/main.connect';
import SignIn from '../sign-in/sign-in.connect';
import {
  Route,
  Switch
} from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadOffers();
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact render={(props) => (
          <Main
            {...props}
          />
        )}/>
        <Route path="/login" exact component={SignIn}/>
        <Route
          render={() => (
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
          )}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  loadOffers: PropTypes.func
};

export default App;
