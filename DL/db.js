const mongoose = require('mongoose')
const MONGO_URL='mongodb+srv://test:1234@cluster0.onb7tvx.mongodb.net/yehoshua?retryWrites=true&w=majority'
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