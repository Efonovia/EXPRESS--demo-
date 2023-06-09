const express = require('express')

const friendsController = require('../controller/friends.controller')

const friendsRouter = express.Router()

friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend)


module.exports = friendsRouter