config = {};

config.port = process.env.PORT || 9090;

config.dbUrl = `mongodb://localhost:27017/dosthi`

module.exports = config;