import React, { useState, useEffect, useRef } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Messages } from 'primereact/messages';
import { location } from './locationJSON';
import { MAPVIEWS } from "../../Constants/Constant";
import './Mapview.css';

function MapContainer({ selectedCoords, google }) {
  const [stores, setStores] = useState([]);
  const msgs = useRef(null);
  useEffect(() => {
    setStores(location.marker);
  }, [selectedCoords, google]);
  const showMessage = () => {
    msgs.current.show(
      { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
    );
  }
  const displayMarkers = () => {
    return stores.map((store, index) => {
      let iconPath;
      switch (store.statusMarker) {
        case MAPVIEWS.RED:
          iconPath = require("../../assets/images/MapMarkerRed.png");
          break;
        case MAPVIEWS.GREEN:
          iconPath = require("../../assets/images/MapMarkerGreen.png");
          break;
        default:
          iconPath = require("../../assets/images/MapMarkerYellow.png");
          break;
      }
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          icon={iconPath}
          onClick={showMessage}
        />
      );
    });
  }
  return (

    <div style={{
      position: "absolute",
      width: "95%",
      height: "61%"
    }}>
      <Map
        google={google}
        zoom={8}
        className='mapStyles'
        center={
          (selectedCoords && selectedCoords.latitude && selectedCoords.longitude)
            ? { lat: selectedCoords.latitude, lng: selectedCoords.longitude }
            : { lat: 0, lng: 0 }
        }
        margin={[30, 30, 30, 30]}
      >
        {displayMarkers()}
      </Map>
    </div>

  );
}
export default GoogleApiWrapper({
  apiKey: location.apiKey
})(MapContainer);


