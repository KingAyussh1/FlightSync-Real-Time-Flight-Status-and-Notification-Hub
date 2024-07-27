import React from "react";
import FlightStatus from "./components/FlightStatus";
import NotificationSettings from "./components/NotificationSettings";

function App() {
  return (
    <div>
      <h1>Flight Status and Notifications</h1>
      <FlightStatus />
      <NotificationSettings />
    </div>
  );
}

export default App;
