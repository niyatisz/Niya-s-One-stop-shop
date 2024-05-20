const userModel = require("../models/user-model");

async function updateUsers(req,res) {
    try {
        const sessionUser = req.userId
        console.log('req.userId: ', req.userId);
        console.log('sessionUser: ', sessionUser);
        const {userId, name, email, role} = req.body
        const payload = {
            ...(email && {email: email}),
            ...(name && {name:  name}),
            ...(role && {role:  role})
        }

        const user = await userModel.findById(sessionUser)
        console.log(user.role)
        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.status(200).json({
            message: "User Updated Successfully",
            data: updateUser,
            error: false,
            success: true
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}
module.exports = updateUsers