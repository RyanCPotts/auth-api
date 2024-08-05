# Auth API

This repository contains the Auth API, a backend service for user authentication and authorization. It provides endpoints for user registration, login, and role-based access control.

## Features

- User Registration
- User Login
- Token-Based Authentication
- Role-Based Access Control
- Secure Password Storage

## Technologies Used

- Node.js
- Express
- MongoDB
- JWT (JSON Web Token)
- Bcrypt

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RyanCPotts/auth-api.git
    cd auth-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=3000
    MONGODB_URI=<Your MongoDB URI>
    SECRET=<Your JWT Secret>
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Endpoints

### Register a User

- **URL**: `/signup`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "username": "your_username",
        "password": "your_password",
        "role": "user"  // optional, default is 'user'
    }
    ```

### Login a User

- **URL**: `/signin`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```

### Get User Data

- **URL**: `/users`
- **Method**: `GET`
- **Headers**: 
    ```json
    {
        "Authorization": "Bearer <your_jwt_token>"
    }
    ```

## Usage

This API is designed to be used as a backend service for applications that require user authentication and authorization. You can integrate it with a frontend application or another backend service to handle user management and secure access to resources.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
