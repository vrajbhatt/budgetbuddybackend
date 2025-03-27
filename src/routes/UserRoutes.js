//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//get
routes.get("/users",userController.getAllUsers)
//post
// routes.post("/user",userController.addUser)
routes.post("/user",userController.signup)
//delete
routes.delete("/user/:id",userController.deleteUser)
//getbyid
routes.get("/user/:id",userController.getUserById)
routes.post("/user/login",userController.loginUser)
routes.post("/adduserwithprofileimage", userController.addUserWithProfileImage);
routes.get("/adduserwithprofileimage", userController.addUserWithProfileImage);

module.exports = routes