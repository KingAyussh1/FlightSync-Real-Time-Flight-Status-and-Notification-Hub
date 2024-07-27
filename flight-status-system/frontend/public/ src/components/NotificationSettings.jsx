import React, { useState } from "react";
import api from "../services/api";

const NotificationSettings = () => {
  const [email, setEmail] = useState("");
  const [sms, setSms] = useState("");
  const [appNotification, setAppNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/notifications", {
        email,
        sms,
        appNotification,
      });
      alert("Notification settings updated successfully!");
    } catch (error) {
      console.error("Error updating notification settings:", error);
    }
  };

  return (
    <div>
      <h2>Notification Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>SMS: </label>
          <input
            type="text"
            value={sms}
            onChange={(e) => setSms(e.target.value)}
          />
        </div>
        <div>
          <label>App Notifications: </label>
          <input
            type="checkbox"
            checked={appNotification}
            onChange={(e) => setAppNotification(e.target.checked)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NotificationSettings;

