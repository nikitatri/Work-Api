const User = require('../models/userModel');

class UserDao {
    async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    async getUserById(userId) {
        return User.findById(userId).where({ isDeleted: false }).exec();
    }

    async getUsers() {
        return User.find({ isDeleted: false }).exec();
    }

    async updateUser(userId, updateData) {
        return User.findByIdAndUpdate(userId, updateData, { new: true }).where({ isDeleted: false }).exec();
    }

    async deleteUser(userId) {
        return User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true }).exec();
    }
}

module.exports = new UserDao();
