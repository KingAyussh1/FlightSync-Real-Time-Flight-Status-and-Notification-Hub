const MongoClient = require('mongodb').MongoClient;

async function initDatabase() {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('flightstatus');

        // Initialize flight data
        const flightsCollection = db.collection('flights');
        await flightsCollection.deleteMany({});
        await flightsCollection.insertMany([
            {
                number: 'AA101',
                status: 'On Time',
                gate: 'A1'
            },
            {
                number: 'BA202',
                status: 'Delayed',
                gate: 'B2'
            },
            {
                number: 'CA303',
                status: 'Cancelled',
                gate: 'C3'
            }
        ]);

        // Initialize user data
        const usersCollection = db.collection('users');
        await usersCollection.deleteMany({});
        await usersCollection.insertOne({
            email: 'test@example.com',
            sms: '1234567890',
            appNotification: true
        });

        console.log('Initialized mock data');
    } finally {
        await client.close();
    }
}

initDatabase().catch(console.error);

