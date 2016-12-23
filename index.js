require('./app/index.js');
import 'less/base';

window.initMap = () => {
  const point = {
    lat: 59.899519,
    lng: 10.6287
  };

  const customMapType = new google.maps.StyledMapType([{ // eslint-disable-line no-undef
    stylers: [{
      saturation: -100
    }]
  }]);
  const customMapTypeId = 'appyard';

  const map = new google.maps.Map(document.getElementById('Map'), { // eslint-disable-line no-undef
    center: point,
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false
  });

  const marker = new google.maps.Marker({ // eslint-disable-line no-undef, no-unused-vars
    position: point,
    map
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
};
