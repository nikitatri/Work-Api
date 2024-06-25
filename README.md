# Work API

Work API is a Node.js project built with MVC architecture and basic authentication. It provides endpoints to manage user data in a MongoDB database.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Endpoints](#endpoints)
  - [Create User](#create-user)
  - [List Users](#list-users)
  - [Get User Details](#get-user-details)
  - [Update User](#update-user)
  - [Delete User](#delete-user)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Node.js (v14.x or higher)
- MongoDB
- Postman (optional, for testing API endpoints)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nikitatri/work-api.git
   cd work-api

2. **Install Dependencies:**
   ```bash
   npm install

3. **Set environment variables**
   Create a .env file int the root directory and add the following:
   ```bash
     DB_URI=mongodb://localhost:27017/worko
     BASIC_AUTH_USER=admin
     BASIC_AUTH_PASS=secret
     PORT=3000


Adjust 'DB_URI' to your MongoDB connection URL.

4. **Start the server**
     ```bash
       npm start

The server will start at 'http://localhost:3000'

## Endpoints

1. **Create User:**
 
   - URL: `POST/work/user'
   - Description : Creates a new user.
   - Request body:
   ```bash
   {
    "email": "test@example.com",
    "name": "Nikita",
    "age": 20,
    "city": "Uttar Pradesh",
    "zipCode": "231219"
   }
  
 - Authorization: Basic Auth (admin:secret)
 - Response: JSON object of the created user.

2. **List Users:**
    - URL: GET /work/user
    -  Description: Retrieves a list of all users.
    - Authorization: Basic Auth (admin:secret)
    - Response: JSON array of user objects.

3. **Get User Details:**
   - URL: GET /work/user/:userId
   - Description: Retrieves details of a specific user.
   - Authorization: Basic Auth (admin:secret)
   - Response: JSON object of the user.

4. **Update User:**
  - URL: PUT /work/user/:userId
  - Description: Updates details of a specific user.
  - Request Body:
    ```bash
        {
          "email": "updated@example.com",
          "name": "Nikita",
          "age": 21,
          "city": "Chandigarh",
          "zipCode": "160019"
        }
  - Authorization: Basic Auth (admin:secret)
  - Response: JSON object of the updated user.
5. **Delete User:**
   - URL: DELETE /work/user/:userId
   - Description: Soft deletes a specific user.
   - Authorization: Basic Auth (admin:secret)
   - Response: JSON object confirming deletion.


## Testing

To test the API endpoints, you can use tools like Postman or run automated tests using Jest.

1. **Automated Tests:**
   - Run tests:

   ```bash
        npm test

This will execute unit tests using Jest with coverage reporting.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.