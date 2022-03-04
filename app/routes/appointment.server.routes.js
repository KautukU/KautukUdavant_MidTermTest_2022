//Load the index controller
var index = require('../controllers/index.server.controller');
// Load the 'appointment' controller
var appointments = require('../controllers/appointment.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    //
    //show the 'index' page if a GET request is made to root
    app.route('/').get(index.render);
    //show the 'add_appointment' page if a GET request is made to /appointments
    app.route('/add_appointment').get(index.renderAdd);
    
    // a post request to /appointments will execute createAppointment method in appointment.server.controller
    app.route('/add_appointment').post(appointments.createAppointment);

    app.route('/list_appointments').get(appointments.readAppointments);
    app.route('/list_appointments').delete(appointments.deleteAppointment);
    
    
};
