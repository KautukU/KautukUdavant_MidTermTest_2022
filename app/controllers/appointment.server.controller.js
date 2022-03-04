var Appointment = require('mongoose').model('Appointment');

exports.createAppointment = function (req, res, next) {
    var appointment = new Appointment(req.body);

    
    appointment.save(function (err) {
        if (err) {
            return next(err);
        }
    });
    
    res.render('index', {
        title: 'Vaccine Appointments - Home Page'
    });
    alert("Your appointment has been saved");
    
    
};

// Create a new 'readAppointments' controller method
exports.readAppointments = function (req, res, next) {
    console.log('in readAppointments')
    Appointment.find({}, function (err, appointments) {
        console.log(appointments)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readAppointment method')
            return next(err);
        } else {
            //
            res.render('list_appointments', {
                title: 'Vaccine Appointments - List of Appointments',
                appointments: appointments
            });
        }
    });
};

// Delete appointment method
exports.deleteAppointment = (req, res, next) => {
    Appointment.findOneAndRemove({cardNumber: req.body.initialcardNumber}, req.body, (err) => {
        if (err) {
            console.log("Error finding and deleting stuff");
            return next(err);
        } else {
        	res.json(req.appointment);
            res.redirect('list_appointments');
        }
    });
};

