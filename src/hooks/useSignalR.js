import * as signalR from "@microsoft/signalr";
import { useEffect, useRef } from "react";

export const useSignalR = (onReceiveLocation) => {
  const connectionRef = useRef(null);

  useEffect(() => {
    const connect = async () => {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://tech-test.raintor.com/Hub")
        .withAutomaticReconnect()
        .build();

      connection.on("ReceiveLatLon", (data) => {
        onReceiveLocation(data);
      });

      try {
        await connection.start();
        console.log("SignalR connected");
      } catch (error) {
        console.error("Connection failed", error);
      }

      connectionRef.current = connection;
    };

    connect();

    return () => {
      connectionRef.current?.stop();
    };
  }, []);

  const sendLocation = (lat, lon, userName) => {
    connectionRef.current?.invoke("SendLatLon", lat, lon, userName);
    console.log(lat, lon, userName);
  };

  return { sendLocation };
};
