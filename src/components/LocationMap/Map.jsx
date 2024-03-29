import { MapContainer, TileLayer, Marker, Popup,  } from "react-leaflet";

function Map() {
  const position = [34.073620, -118.400352]
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100%', height: '400px',}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          4297 Libby Street, Beverly Hills, California
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
