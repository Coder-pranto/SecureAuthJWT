# SecureAuthJWT

This web authentication application implements secure user registration, login, and profile access using technologies such as Passport.js, Passport JWT, Bcrypt, Node.js, Express.js, Mongoose, React, and Bootstrap 4. It ensures data security by hashing user passwords with Bcrypt before storing them. The application utilizes Passport.js and Passport JWT for authentication, generating JSON Web Tokens (JWT) upon login to authenticate subsequent requests. It is built with a backend in Node.js and Express.js, and uses MongoDB with Mongoose for data storage. The frontend is developed with React and Bootstrap 4 for a responsive user interface. Overall, this application provides a robust, secure, and user-friendly authentication system.

### Technologies Used

- Node.js: A JavaScript runtime environment that allows server-side execution of JavaScript code.
- Express.js: A web application framework for Node.js that simplifies the creation of server-side applications.
- MongoDB: A NoSQL database used to store user data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Passport.js: An authentication middleware for Node.js that provides various authentication strategies.
- Passport JWT: A Passport strategy for authenticating with JSON Web Tokens (JWT).
- Bcrypt: A library used for hashing passwords securely.
- React: A JavaScript library for building user interfaces.
- Bootstrap 4: A popular CSS framework for creating responsive and visually appealing web applications.

### Features

1. User Registration: Users can create an account by providing a unique username and password. The password is securely hashed using the Bcrypt library before storing it in the database.

2. User Login: Users can log in to their account by providing their username and password. The application verifies the provided credentials and issues a JSON Web Token (JWT) upon successful authentication.

3. Protected Routes: The application includes a protected route that requires authentication. Only authenticated users with a valid JWT can access this route.

4. User Profile: Authenticated users can access their profile, which displays their unique user ID and username.

### Usage

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command in the project's root directory:

```
npm install
```

3. Set up the environment variables:

   - Create a `.env` file in the project's root directory.
   - Define the following environment variables in the `.env` file:
     - `PORT`: The port on which the server will run (default: 3000).
     - `SECRET_KEY`: A secret key used for JWT token generation.

4. Start the server by running the following command:

```
npm start
```

5. Access the application in your web browser at `http://localhost:8999` (or the specified port).

6. Register a new user account by providing a unique username and password.

7. Log in with the registered account to access the protected routes and view the user profile.

### Project Structure

The project is structured as follows:

- `config/`: Contains configuration files for database connection and Passport authentication.
- `model/`: Contains the Mongoose schema definition for the User model.
- `routes/`: Contains the route handlers for user registration, login, and profile access.
- `client/`: Contains the React client-side code for the user interface.
- `index.js`: The main entry point of the server-side application.

### Contributing

Contributions to the project are welcome! If you find any bugs, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to modify and distribute the code as per the terms of the license.

---

