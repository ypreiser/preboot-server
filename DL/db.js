const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL
async function connect() {
    try {
        mongoose.connect(MONGO_URL)
        
            .then(() => { console.log("DB - Connection Success") })
    }
    catch (err) {
        console.log("MongoDB Error:", err);
    }
}
module.exports = { connect }