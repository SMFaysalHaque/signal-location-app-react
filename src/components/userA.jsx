import { useState } from "react";
import { useSignalR } from "../hooks/useSignalR";

export default function UserA() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const { sendLocation } = useSignalR(() => {});

  const simulateLocation = () => {
    const simulatedLat = 25.737 + Math.random() * 0.01;
    const simulatedLon = 90.364 + Math.random() * 0.01;
    setLat(simulatedLat);
    setLon(simulatedLon);
    sendLocation(simulatedLat, simulatedLon, "smfaysalhaque007@gmail.com");
  };

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md w-full max-w-md mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">User A - Send Location</h2>
      <p>Lat: {lat.toFixed(5)}</p>
      <p>Lon: {lon.toFixed(5)}</p>
      <button
        onClick={simulateLocation}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send Location
      </button>
    </div>
  );
}
