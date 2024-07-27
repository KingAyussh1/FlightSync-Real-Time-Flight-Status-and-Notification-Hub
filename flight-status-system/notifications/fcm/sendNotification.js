const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification: {
        title: 'Flight Update',
        body: 'Flight AA101 is delayed'
    },
    token: 'DEVICE_REGISTRATION_TOKEN'
};

admin.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.error('Error sending message:', error);
    });

