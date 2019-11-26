import {Redirect} from 'react-router-dom';

const withAuthReqiure = (Component) => {
  class RequireAuth extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        needRedirect: false,
      };

      this.setAuthStateHandler = this
      .setAuthStateHandler
      .bind(this);
    }

    setAuthStateHandler(data) {
      this.setState({needRedirect: data});
    }

    render() {
      if (this.state.needRedirect) {
        return <Redirect to="/login"/>;
      } else {
        return <Component {...this.props} onClickToAuthRequire={this.setAuthStateHandler}/>;
      }
    }
  }

  RequireAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return RequireAuth;
};

export default withAuthReqiure;


