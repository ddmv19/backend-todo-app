# API (Todos)

This repository contains the code of the backend project for a task management API, <strong>development as practice for acquiring web development skills 💻.</strong>

## Description

This API is responsible for providing RESTful services for task management. It is developed use Node.js Express as the main framework, along with with other technologies such as CORS for security policy management, Dotenv for environment variable management, Express-validator for data validation, Mongoose for communication with the MongoDB database, and Nodemon for automatic server restar during devolopment.

## Frontend Repository

If you are interested in explore the frontend project associated with this API of Todos, can find the repository in the following link:

[Frontend Project Repository](https://github.com/ddmv19/frontend-todo-app)

## Previous Requirements

This project use environment variables to configure important aspects of application. The required environment variables are listed bellow:

`PORT`: The port on which the backend application will run.
`MONGODB_CNN`: The link of connection to MongoDB Cluster (Database) when the task data will stored.

To set these environment variables, create an `.env` file in the root of the project and define the variables mentioned above. You can follow the example of the `.env.example` file.

## Installation

Follow this steps for execute the project locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `pnpm install` to install dependencies.
4. Run `pnpm start` to start the server.
5. The server will start on the port specified in the `.env` file.
