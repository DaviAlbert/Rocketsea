const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

function myMiddleware(request, response, next){
    if(!request.body.isadmin){
        return response.json({message: "user unauthorized"})
    }
    next()
}

module.exports = usersRoutes;