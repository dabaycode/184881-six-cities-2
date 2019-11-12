const withActiveItem = (Component) => {
  return class withActiveItemClass extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem || null,
      };

      this.setStateHandler = this
        .setStateHandler
        .bind(this);
    }

    setStateHandler(data) {
      this.setState({activeItem: data});
    }

    render() {
      return (<Component
        {...this.props}
        activeItem={this.state.activeItem}
        onSelectActiveElement={this.setStateHandler}/>);
    }
  };
};

withActiveItem.propTypes = {
  activeItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
};

export default withActiveItem;
