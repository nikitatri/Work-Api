const userDao = require('../daos/userDao');
const UserDto = require('../dtos/userDto');

class UserService {
    async createUser(userData) {
        const user = await userDao.createUser(userData);
        return new UserDto(user);
    }

    async getUserById(userId) {
        const user = await userDao.getUserById(userId);
        if (user) {
            return new UserDto(user);
        }
        return null;
    }

    async getUsers(page, limit, sortBy, sortOrder) {
        const skip = (page - 1) * limit;
        const users = await userDao.getUsers().sort({ [sortBy]: sortOrder }).skip(skip).limit(limit);
        return users.map(user => new UserDto(user));
    }

    async updateUser(userId, updateData) {
        const user = await userDao.updateUser(userId, updateData);
        if (user) {
            return new UserDto(user);
        }
        return null;
    }

    async deleteUser(userId) {
        const user = await userDao.updateUser(userId, { isDeleted: true });
        return new UserDto(user);
    }

    async restoreUser(userId) {
        const user = await userDao.updateUser(userId, { isDeleted: false });
        return new UserDto(user);
    }
}

module.exports = new UserService();
