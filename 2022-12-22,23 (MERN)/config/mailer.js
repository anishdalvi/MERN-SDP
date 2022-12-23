const nodemailer = require('nodemailer')

const sendMail = (email, username, otp) => {
    try {
        const transport = nodemailer.createTransport({
            //host: "smtp.ethereal.email",
            host: "smtp.gmail.com",
            port: 465,
            //service:"gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        })

        return transport.sendMail({
            from:"anishdalvi2001@gmail.com",
            to: email,
            subject: "OTP for Email Verfication MERN Stack SDP",
            html:       // template literals ``
            `   
            <div>
            <h1>Aye shaani ${username}</h1>       
            <h1>Zhopaaa Kaaad</h1>
            <h2>Email Service of Nodemailer.....Ting Tong</h2>
            <br />
            <p>Your OTP for email verification is <strong> ${otp} </strong>
            <br />
            <h4>E Cell saathi nahi aalis ka?</h4>
            </div>
            `

        })
        .then((response) => {
            console.log("Email Sent ", response);
        })
    } catch (error) {
        console.log("Error:", error);
    }
}

module.exports = {
    sendMail
}