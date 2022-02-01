const mongoose = require('mongoose');
const db = mongoose.connection;
const dotenv = require('dotenv');
// dotenv.config();

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log(
        `MongoDB successfully connected at ${db.host}:${db.port}`
        )
    )
    .catch((err) => console.log(`MongoDB connection failed. Error: ${err}`));

module.exports = {
    Community: require('./Community'),
    Contributor: require('./Contributor'),
    Recipe: require('./Recipe')
}