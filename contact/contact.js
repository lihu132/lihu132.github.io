var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dylan@engraintimber.com.au',
        pass: 'Cp@89430'
    }
});

var mailOptions = {
    from: 'dylan@engraintimber.com.au',
    to: 'lihu132@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});