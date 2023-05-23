import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import img1 from "./../assets/img/loc.png";

import "../assets/css/map.css";

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={img1} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className='map container'>
    <div className='google-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}>
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
