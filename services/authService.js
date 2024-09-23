
const crypto = require('crypto')
const nodeMailer = require('nodemailer')
const userModel = require('../models/userModel')
//sendOTPFromMail
const sendOTPMail = async (request, response) => {
    try {
        const userEmail = request.body.email
        let OTPNumber;
        if (!userEmail) {
            return response.status(404).json({ message: 'Email is required' });
        }
        OTPNumber = await generateOTP();
        const options = {
            to: `${userEmail}`,
            from: 'kiran124teja@gmail.com',
            subject: 'otp verification code',
            text: `opt sent`,
            html: `<h1>${OTPNumber}</h1>`
        }
        await mailTrans.sendMail(options)
        return response.status(200).json({status:200, message: "email sent successfully...", code:OTPNumber })
    }
    catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const userDetails = async (request, response) => {
    const data = request.body
    let userData = await userModel.findOne(data.email);
    if (!userData) {
        userData = new userModel({ userEmail: userEmail});
    }
    else {
        userData.userEmail = userEmail;
        userData.userOtp = OTPNumber;
        userData.otpExpiry = OTPExpiry;

    }
    await userModel.save();
}



// To generateOTP
const generateOTP = () => {
    return new Promise((reslove, reject) => {
        crypto.randomInt(1000, 10000, (error, success) => {
            if (success) reslove(success);
            else reject(error)
        });

    }
    )
}
const mailTrans = nodeMailer.createTransport(
    {
        secure: true,
        service: 'gmail',
        auth: {
            pass: 'yahc uuoc vqoi xlzv',
            user: "kiran124teja@gmail.com"

        }
    }
)


module.exports = { sendOTPMail, userDetails }