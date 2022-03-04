// Create a new 'render' controller method
exports.render = function (req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', { title: 'Vaccine Appointments - Home Page' } );
    
};

// Create a new 'renderAdd' controller method
exports.renderAdd = function (req, res) {
    // Use the 'response' object to render the 'add_appointment' view with a 'title' property
    res.render('add_appointment', { title: 'Vaccine Appointment - Book Appointment' });

};
