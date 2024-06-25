const userService = require('../services/userService');
const { validateUser, validateId } = require('../middlewares/validator');

class UserController {
    async createUser(req, res) {
        try {
            const { error } = validateUser(req.body);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const user = await userService.getUserById(req.params.userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUsers(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const sortBy = req.query.sortBy || 'createdAt';
            const sortOrder = req.query.sortOrder && req.query.sortOrder.toLowerCase() === 'desc' ? -1 : 1;
            const users = await userService.getUsers(page, limit, sortBy, sortOrder);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const { error: idError } = validateId(req.params.userId);
            if (idError) {
                return res.status(400).json({ error: idError.details[0].message });
            }
            const { error: userError } = validateUser(req.body, true); // true to allow partial updates
            if (userError) {
                return res.status(400).json({ error: userError.details[0].message });
            }
            const user = await userService.updateUser(req.params.userId, req.body);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            const action = req.query.action; 
            let user;
            if (action === 'restore') {
                user = await userService.restoreUser(req.params.userId);
            } else {
                user = await userService.deleteUser(req.params.userId);
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();

function getUser(userId) {
    return {
      id: userId,
      name: 'Nikita',
      email: 'Nikita@example.com',
      age: 20,
      city: 'Chandigarh',
      zipCode: '160019'
    };
  }
  
  module.exports = {
    getUser
  };
  
