import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import React, { useEffect, useState, useRef } from "react";
import "../../App.css";

function useGeoLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { latitude: "", longitude: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

function LocalLocation() {
  const location = useGeoLocation();
  const ZOOM_LEVEL = 11.5;
  const mapRef = useRef(null);

  useEffect(() => {
    if (location.loaded && !location.error) {
      if (mapRef.current && mapRef.current.leafletElement) {
        mapRef.current.leafletElement.setView(
          [location.coordinates.latitude, location.coordinates.longitude],
          ZOOM_LEVEL
        );
      }
    }
  }, [location]);

  return (
    <div className="App">
      <MapContainer
        center={[
          location.coordinates?.latitude || 30.033333,
          location.coordinates?.longitude || 31.233334,
        ]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        whenCreated={(map) => {
          mapRef.current = map;
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker
            position={[
              
              location.coordinates.latitude,
              location.coordinates.longitude,
            ]}
            icon={DefaultIcon}
          >
            <Popup>
              this your location. <br />
            </Popup>
          </Marker>
        )}
        {location.loaded && !location.error && (
          <Marker position={[30.110243, 31.199993]} icon={Icon2}>
            <Popup>
              nearst atm location. <br />
            </Popup>
          </Marker>
        )}
        {location.loaded && !location.error && (
          <Marker position={[30.121243, 31.249773]} icon={Icon2}>
            <Popup>
              nearst atm location. <br />
            </Popup>
          </Marker>
        )}
        {location.loaded && !location.error && (
          <Marker position={[30.101019, 31.249773]} icon={Icon2}>
            <Popup>
              nearst atm location. <br />
            </Popup>
          </Marker>
        )}
        {location.loaded && !location.error && (
          <Marker position={[30.108579, 31.19910]} icon={Icon2}>
            <Popup>
              nearst atm location. <br />
            </Popup>
          </Marker>
        )}
        {location.loaded && !location.error && (
          <Marker position={[30.110243, 31.249773]} icon={Icon2}>
            <Popup>
              nearst atm location. <br />
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl:
    "https://i0.wp.com/www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png?fit=724%2C724&ssl=1",
  iconSize: [25, 35],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
let Icon2 = L.icon({
  iconUrl:
    "https://caps-registry.com/site/wp-content/uploads/2018/05/location-marker.png",
  iconSize: [25, 35],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = Icon2;

export default LocalLocation;
