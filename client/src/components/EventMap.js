import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, TileLayer } from "react-leaflet";

class EventMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 48.853,
      lng: 2.35,
      zoom: 15
    };
  }

  componentDidMount() {
    this.addressToGeoCoordinates(this.props.address);
  }

  addressToGeoCoordinates = address => {
    const url = `${process.env.REACT_APP_APIURL ||
      ""}/api/geocoder?address=${encodeURIComponent(address)}`;
    axios.get(url).then(
      function(response) {
        console.log("response", response.data);
        const lat = response.data.lat;
        const lng = response.data.lng;
        this.setState({
          lat: lat,
          lng: lng
        });
      }.bind(this)
    );
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="EventMap">
        <Map
          center={position}
          zoom={this.state.zoom}
          ref={m => {
            this.leafletMap = m;
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position} />
        </Map>
      </div>
    );
  }
}

export default EventMap;
