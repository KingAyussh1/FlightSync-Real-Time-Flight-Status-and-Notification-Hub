import React, { useEffect, useState } from "react";
import api from "../services/api";

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await api.get("/flights");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h2>Flight Status</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <strong>Flight:</strong> {flight.number} <br />
            <strong>Status:</strong> {flight.status} <br />
            <strong>Gate:</strong> {flight.gate} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatus;

