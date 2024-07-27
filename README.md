# FlightSync-Real-Time-Flight-Status-and-Notification-Hub

# a) Project Overview
The Flight Status and Notifications System is designed to provide passengers with real-time updates on flight status, including delays, cancellations, and gate changes. The system also sends push notifications via various channels such as SMS, email, and app notifications. The solution integrates with airport systems to pull accurate flight data.

# b) Features
1. Real-time Updates: Display current flight status, including delays, cancellations, and gate changes.
2. Push Notifications: Send notifications for flight status changes via SMS, email, and app notifications using messaging systems like Firebase Cloud Messaging, Kafka, or RabbitMQ.
3. Integration with Airport Systems: Fetch real-time flight data from airport databases using mock data.

# c) Technologies Used
1. Frontend
- React.js: A JavaScript library for building user interfaces. Used for creating responsive and interactive components to display flight status and manage notification settings.
- HTML & CSS: Standard web technologies used for structuring and styling the web application.

2. Backend
- Java (Spring Boot): A Java framework used to build the backend REST API. It handles business logic, processes flight data, and manages user notifications.
- Spring Data MongoDB: Used to interact with MongoDB for storing and retrieving flight and user data.
  
3. Database
- MongoDB: A NoSQL database used to store flight information and user notification preferences.
  
4. Notifications
-Firebase Cloud Messaging (FCM): Used to send push notifications to mobile devices.
-Kafka: A distributed event streaming platform used for sending real-time notifications.
-RabbitMQ: A message broker used for sending notifications between services.

# d) Setup Instructions
1. Prerequisites
- Node.js and npm for the frontend.
- Java 11 and Maven for the backend.
- MongoDB for the database.
- Kafka, RabbitMQ, or Firebase Cloud Messaging for notifications.
  
2. Frontend
a) Navigate to the frontend directory.
b) Install dependencies:
npm install
c) Run the development server:
npm start

The frontend will be accessible at http://localhost:3000.

3. Backend
a) Navigate to the backend directory.
b) Build the project with Maven:
mvn clean install
c) Run the Spring Boot application:
mvn spring-boot:run

The backend API will be available at http://localhost:8080/api.

4. Database
a) Start MongoDB on your local machine.
b) Initialize mock data:
node database/init.js

5. Notifications
Choose one of the following notification systems and follow the respective setup:

a) Firebase Cloud Messaging
  1) Add your Firebase project's service account JSON to 'notifications/fcm/serviceAccountKey.json'.
  2) Update the 'DEVICE_REGISTRATION_TOKEN' in 'sendNotification.js'.
  3) Send a test notification:
     node notifications/fcm/sendNotification.js

b) Kafka
   1) Start Kafka and create the necessary topic ('flight-status').
   2) Run the producer:
      node notifications/kafka/producer.js

c) RabbitMQ
   1) Start RabbitMQ and create the necessary queue (flight_status).
   2) Run the producer:
      node notifications/rabbitmq/producer.js

6. Additional Tools and Libraries
-Axios: Used in the frontend to make HTTP requests to the backend.
-Kafka Node: A Node.js client for Kafka to produce messages.
-amqplib: A Node.js library to interface with RabbitMQ.
-Firebase Admin SDK: Used for sending notifications via Firebase Cloud Messaging.
-Spring Boot: A Java framework for building REST APIs.
-Spring Data MongoDB: Provides MongoDB support in Spring applications.


# Conclusion
This project demonstrates the implementation of a flight status and notifications system using a modern web stack. The application is modular, scalable, and designed for real-time updates, providing a seamless experience for passengers to stay informed about their flights.


