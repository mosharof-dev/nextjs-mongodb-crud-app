# Next.js & MongoDB CRUD Application

This is a full-stack learning project built to practice and demonstrate fundamental **CRUD (Create, Read, Update, Delete)** operations using a modern tech stack. While it might look like a full-fledged application, its primary purpose is to serve as a practical learning module for integrating a Next.js frontend with an Express/MongoDB backend.

## 🚀 Features

- **Create**: Add new users to the database.
- **Read**: Fetch and display a list of users from the database.
- **Update**: Edit existing user details.
- **Delete**: Remove users from the database.
- **Responsive UI**: Built with modern UI libraries for a clean and responsive user experience.

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **UI Components**: [HeroUI](https://heroui.com/)
- **Icons**: Gravity UI Icons

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Middleware**: CORS

## 📁 Project Structure

The project is divided into two main parts within this repository:

- `./` - The Next.js frontend client.
- `./nextjs-mongodb-crud-server` - The Express.js backend server.

## ⚙️ Local Development Setup

To run this project locally, you will need to start both the client and the server.

### 1. Backend Setup

Navigate to the server directory:

```bash
cd nextjs-mongodb-crud-server
```

Install the required dependencies:

```bash
npm install
```

Start the Express server:

```bash
node index.js
```
*(Ensure you have your MongoDB connection string configured properly in the server code)*

### 2. Frontend Setup

Open a **new terminal window/tab**, and ensure you are in the root directory (`nextjs-mongodb-crud-client`):

Install the required dependencies:

```bash
npm install
```

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 💡 What I Learned

Throughout this project, I gained hands-on experience with:
- Setting up a MongoDB Atlas cluster and connecting it to a Node.js Express server.
- Designing RESTful API routes for handling HTTP requests (`GET`, `POST`, `PUT`, `DELETE`).
- Managing state and fetching data in a Next.js frontend.
- Handling cross-origin resource sharing (CORS) between the client and server.
- Building a modern, responsive user interface with component libraries.

---
*This project was built as a personal learning milestone to solidify full-stack development concepts.*
