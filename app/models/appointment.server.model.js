// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Define a new 'AppointmentSchema'
var AppointmentSchema = new Schema({
    cardNumber: {type: String, unique: true, required: true},
    vaccineSite: String,
    priorityArea: String, 
    dateTime: Date,
    cancelled: Boolean
});

// Create the 'Appointment' model out of the 'AppointmentSchema'
mongoose.model('Appointment', AppointmentSchema);