const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

const payloads = [
    { topic: 'flight-status', messages: 'Flight AA101 is delayed' },
    { topic: 'flight-status', messages: 'Flight BA202 is on time' },
];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log('Sent messages:', data);
    });
});

producer.on('error', function (err) {
    console.error('Error:', err);
});

