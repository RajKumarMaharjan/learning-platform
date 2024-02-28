import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Leaflet Map
const LocationMap = ({ latitude, longitude, zoom }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
            {latitude}
            {longitude}
            {zoom}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

LocationMap.propTypes = {
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    zoom: PropTypes.string.isRequired,
  };

export default LocationMap;
