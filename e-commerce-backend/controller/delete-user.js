const userModel = require("../models/user-model");

async function deleteUser(req, res) {
  try {
    const sessionUser = req.userId; // Get the ID of the logged-in user
    console.log('req.userId: ', req.userId);
    console.log('sessionUser: ', sessionUser);
    
    const { userId } = req.body; // Get the ID of the user to be deleted
    const user = await userModel.findById(sessionUser); // Find the logged-in user's data

    // Check if the logged-in user is an admin
    if (user.role === 'ADMIN') {
      const deleteUser = await userModel.findByIdAndDelete(userId); // Delete the user

      // Clear the cookie only if the session user is being deleted
      if (sessionUser === userId) {
        res.clearCookie("token");
      }

      res.status(200).json({
        message: "User Deleted Successfully",
        data: deleteUser,
        error: false,
        success: true,
      });
    } else {
      res.status(403).json({
        message: "You are not authorized to delete users",
        error: true,
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = deleteUser;
