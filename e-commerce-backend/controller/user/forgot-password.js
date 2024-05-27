const userModel = require("../../models/user-model");

const nodemailer = require('nodemailer');
const crypto = require('crypto');

async function forgotPasswordController(req,res) {
    try {

        const { email } = req.body;
        try {
          const user = await userModel.findOne({ email });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          const token = crypto.randomBytes(20).toString("hex");
      const resetToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
          user.resetPasswordExpires = Date.now() + 3600000; // Token expiration time: 1 hour
          await user.save();
          const mailOptions = {
            from: 'niyasEcommerce@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
              + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
              + `http://${req.headers.host}/reset/${token}\n\n`
              + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
          };
          await transporter.sendMail(mailOptions);
          res.status(200).json({ message: 'Email sent' });
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      
        
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
          });
    }
}

module.exports = forgotPasswordController