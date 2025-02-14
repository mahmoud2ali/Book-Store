# Book Store App

## Overview

The **Book Store App** is a full-stack MERN application that allows users to manage books efficiently. Users can add, retrieve, update, and delete books, ensuring a seamless experience with a responsive UI.

## Features

- **Book Management:** Add, update, delete, and view books.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **RESTful API:** Ensures smooth data handling between the frontend and backend.
- **Full-Stack Implementation:** Uses MongoDB, Express.js, React.js, and Node.js (MERN stack).

## Technologies Used

- **Frontend:** React.js, Redux, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Tools:** RESTful APIs
- **Version Control:** Git & GitHub

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- Git

### Steps to Run the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/book-store-app.git
   cd book-store-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. **Run the backend server:**
   ```sh
   npm run server
   ```
5. **Run the frontend application:**
   ```sh
   cd client
   npm start
   ```

## API Endpoints

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | /api/books      | Get all books           |
| POST   | /api/books      | Add a new book          |
| PUT    | /api/books/\:id | Update an existing book |
| DELETE | /api/books/\:id | Delete a book           |
