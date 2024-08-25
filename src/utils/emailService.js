const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shikhapoornima@gmail.com', // Your email
        pass: 'vyak cnlm nkdi swjd' // Your email password or app password
    }
});

const sendOtpEmail = (email, otp) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}.`
    };

    return transporter.sendMail(mailOptions);
};

const sendBookingConfirmation = (email, bookingDetails) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Booking Confirmation',
        text: `Your booking has been confirmed!\n\nDetails:\n${bookingDetails}`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail, sendBookingConfirmation };