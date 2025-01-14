const { Router } = require('express')
const usersRoutes = require('./users.routes')
const { Router } = require('express')
const UsersController = require('./controller')

const usersRoutes = Router()
const usersController = new UsersController()

routes.use('/users', usersRoutes)
usersRoutes.post('/', usersController.create)

module.exports = { usersRoutes, routes };