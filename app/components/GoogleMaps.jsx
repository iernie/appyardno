import React, { Component } from 'react';
import asyncLoad from 'react-async-loader';

class GoogleMap extends Component {

  constructor() {
    super();
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    this.initialize(this.canvas);
  }

  componentDidUpdate() {
    this.initialize(this.canvas);
  }

  initialize(canvas) {
    if (this.props.gmap && this.state.map == null) {
      const gmap = this.props.gmap;

      const point = {
        lat: 59.899519,
        lng: 10.6287
      };

      this.state.map = new gmap.Map(canvas, {
        center: point,
        zoom: 12,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
      });

      const customMapType = new gmap.StyledMapType([{
        stylers: [{
          saturation: -100
        }]
      }]);
      const customMapTypeId = 'appyard';

      new gmap.Marker({ // eslint-disable-line no-new
        position: point,
        map: this.state.map
      });

      this.state.map.mapTypes.set(customMapTypeId, customMapType);
      this.state.map.setMapTypeId(customMapTypeId);
    }
  }

  render() {
    return (
      <div ref={(c) => { this.canvas = c; }} className="Map-item" />
    );
  }

}

function mapScriptsToProps() {
  return {
    gmap: {
      globalPath: 'google.maps',
      url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIRD9Y93tSbxINqOUQplI4C_-9pQgWs-Y',
      jsonp: true
    }
  };
}

GoogleMap.propTypes = {
  gmap: React.PropTypes.object
};

export default asyncLoad(mapScriptsToProps)(GoogleMap);
