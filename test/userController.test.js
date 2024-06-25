const { getUser } = require('../controllers/userController');
describe('getUser function', () => {
  test('it should return user data', () => {
    const userId = '123';
    const user = getUser(userId);
    expect(user).toEqual({
      id: userId,
      name: 'Nikita',
      email: 'Nikita@example.com',
      age: 20,
      city: 'Chandigarh',
      zipCode: '160019'
    });
  });
});
