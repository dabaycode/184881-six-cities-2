import Leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    const {mapIconUrl, mapIconSize, mapZoom, mapCityCoords, cards} = props;

    this.mapContainer = React.createRef();

    this._iconUrl = mapIconUrl
      ? mapIconUrl
      : `/img/pin.svg`;
    this._iconSize = mapIconSize
      ? mapIconSize
      : [30, 30];
    this._zoom = mapZoom
      ? mapZoom
      : 12;
    this._city = mapCityCoords
      ? mapCityCoords
      : [52.3909553943508, 4.85309666406198];

    this.state = {
      cards: cards
    }
  }

  _addMArkersToMap() {
    this._markerGroup = Leaflet
      .layerGroup()
      .addTo(this._map);

    this
      .state
      .cards
      .forEach((card) => {
        Leaflet
          .marker(card.coordinates, this._icon)
          .addTo(this._markerGroup);
      });
  }

  componentDidMount() {
    this._map = this.mapContainer.current
      ? Leaflet.map(this.mapContainer.current, {
        center: this._city,
        zoom: this._zoom,
        zoomControl: false,
        marker: true
      })
      : null;

    if (this._map) {
      this
        ._map
        .setView(this._city, this._zoom);

      Leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contr` + `ibutors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
        .addTo(this._map);

      this._icon = Leaflet.icon({iconUrl: this._iconUrl, iconSize: this._iconSize});

      this._addMArkersToMap();
    }
  }

  componentDidUpdate() {
    this.setState({cards: this.props.cards});

    this
      ._map
      .removeLayer(this._markerGroup);

    this._addMArkersToMap();
  }

  render() {
    return (
      <div
        id="map"
        style={{
        width: `100%`,
        height: `100%`
      }}
        ref={this.mapContainer}></div>
    );
  }
}

export default Map;

Map.propTypes = {
  mapIconUrl: PropTypes.string,
  mapIconSize: PropTypes.arrayOf(PropTypes.number.isRequired),
  mapZoom: PropTypes.number,
  mapCityCoords: PropTypes.arrayOf(PropTypes.number.isRequired),
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired)
  }))
};
