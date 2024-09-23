const UserData = require('../models/userModel')

const userDetails = async (request, response) => {
    // const data = request.body
    // let userData = await UserData.findOne(data.email);
    // if (!userData) {
    //     userData = new UserData({ userEmail: userEmail});
    // }
    // else {
    //     userData.userEmail = userEmail;
    //     userData.userOtp = OTPNumber;
    //     userData.otpExpiry = OTPExpiry;

    // }
    // await userData.save();
}

module.exports = { userDetails }