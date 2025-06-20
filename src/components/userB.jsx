import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSignalR } from "../hooks/useSignalR";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function UserB() {
  const [location, setLocation] = useState(null);

  const onReceiveLocation = (data) => {
    console.log("Received:", data);
    setLocation(data);
  };

  useSignalR(onReceiveLocation);

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md w-full max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        User B - Location Viewer
      </h2>

      {location ? (
        <MapContainer
          center={[location.lat, location.lon]}
          zoom={15}
          className="h-96 w-full rounded"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>
              {location.userName} <br />
              {location.lat.toFixed(5)}, {location.lon.toFixed(5)}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center">Waiting for location data...</p>
      )}
    </div>
  );
}
