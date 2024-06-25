const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
