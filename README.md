# 📁 Portfolio — Gian Caorlin

## 👋 Welcome

This is my personal portfolio project.
It presents my professional profile as a **Full-Stack Developer / Designer**, using:

- ⚙️ **Angular** for the frontend  
- ⚙️ **Express.js + Node.js** for the backend  
- ⚙️ **MongoDB Atlas** for the database  

Everything is integrated into a full web application and deployed to the cloud.

---

## 🚀 Tech Stack

### Frontend
- [Angular](https://angular.io/)
- HTML5 + SCSS
- Angular Routing & Services
- Firebase Hosting

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- MongoDB via Mongoose
- Deployed on [Render](https://render.com)

### Database
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📁 Project Structure

```bash
/portfolio-front     # Angular frontend application
/portfolio-back      # Express backend API
/README.md           # This file
```

## 🛠️ Running Locally

### ▶️ Clone the repository
```bash
git clone https://github.com/l5partanl/portfolio-back.git
```

### ▶️ Setup Backend
```bash
cd portfolio-back
npm install
npm run dev
```

⚠️ Make sure to create a .env file inside portfolio-backend/ with your MongoDB connection string and any other required environment variables.



# Express Base Application for API Creation

This is a basic Express application template designed to help you create APIs
quickly. It includes essential configurations and setup for starting an Express
server.

## Features

- Basic Express server setup
- CORS enabled
- Environment configuration with `.env` support

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them
from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mariogiron/express-init-template.git project-name
```

2. **Navigate to the project directory:**

```bash
cd project-name
```

3. **Install the dependencies:**

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root of the project and configure your environment
variables. An example `.env` file might look like this:

```
PORT=3000
```

### Running the Application

#### Start the server

Start the server by running:

```bash
npm start
```

The server will start and listen on the port defined in your `.env` file, or
default to port 3000 if not specified.

#### Development mode

To start the server in development mode with `nodemon`, which will automatically
restart the server on file changes, run:

```bash
npm run dev
```

### Available Scripts

- **start**: Runs `node index.js` to start the server.
- **dev**: Runs `nodemon index.js` to start the server in development mode with
  automatic restarts on file changes.
- **generate**: Runs `express generate` to create any resource inside your
  project. The actions available are "model", "controller", "route", "all"
- **config**: Runs `express config` to config the date of your project.

### Project Structure

    ├── src
    │   ├── app.js          # Express app configuration
    │   ├── models          # Data models
    │   ├── controllers     # Route controllers
    │   ├── routes          # Application routes
    ├── .env                # Environment variables
    ├── index.js            # Server creation and configuration
    ├── package.json        # Project metadata and dependencies

### Contributing

Feel free to submit issues and pull requests to improve the project. For major
changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the ISC License - see the LICENSE file for
details.
