const config = require("./config");

let Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;

let MongoURL = config.dbUrl;
let options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

const connectToDb = async () => {
    try {
        await Mongoose.connect(MongoURL, options);
        console.log(`Connected to mongo db--->${MongoURL}`);
    }
    catch (error) {
        console.error('Could not connect to MongoDB');
    }
}

module.exports = {
    connectToDb
};