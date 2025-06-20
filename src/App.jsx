// src/App.jsx
import UserA from "./components/UserA";
import UserB from "./components/UserB";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Real-Time Location Sharing
      </h1>
      <div className="flex flex-col gap-10 items-center">
        <UserA />
        <UserB />
      </div>
    </div>
  );
}
