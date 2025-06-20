# 📍 Real-Time Location Sharing with React + SignalR

This is a React-based application demonstrating real-time location communication between two users using SignalR and Leaflet. It features:

- 📡 Live GPS data broadcasting (simulated)
- 🗺️ Map display with real-time marker updates
- ⚛️ React, Tailwind CSS, Leaflet, and SignalR
- 🧩 Custom hook to encapsulate SignalR logic

## ✨ Features

- 👤 **User A**: Simulates and sends live GPS coordinates
- 👥 **User B**: Listens for updates and displays location on a Leaflet map
- 🔄 Real-time communication powered by [SignalR](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction)

## 🚀 Technologies Used

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SignalR](https://learn.microsoft.com/en-us/aspnet/core/signalr/)
- [Leaflet](https://leafletjs.com/)
- [Axios](https://axios-http.com/)

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/SMFaysalHaque/signal-location-app-react.git
cd real-time-location-app

# Install dependencies
npm install

# Start the development server
npm run dev

🧠 Project Structure
src/
├── components/
│   ├── UserA.jsx         # Sends location
│   └── UserB.jsx         # Receives and displays location
├── hooks/
│   └── useSignalR.js     # Encapsulated SignalR logic
├── App.jsx
└── main.jsx

⚙️ SignalR Hub Details
Hub URL: https://tech-test.raintor.com/Hub

Send Location
Method: SendLatLon

Params: lat, lon, userName (your email)

Receive Location
Method: ReceiveLatLon

Payload: {
  "userName": "Default",
  "lat": 25.73736464,
  "lon": 90.3644747
}

🧪 Usage
Open two tabs (or devices):

Tab 1: User A — sends simulated location.

Tab 2: User B — displays real-time location on the map.

🌐 Demo: https://signal-location-app-smfaysalhaque.netlify.app/


