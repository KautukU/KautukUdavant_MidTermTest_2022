// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    var db = mongoose.connect(config.db);
    // Load the 'Appointment' model 
    require('../app/models/appointment.server.model');
    // Return the Mongoose connection instance
    return db;
};
