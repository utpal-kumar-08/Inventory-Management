# 🛍️ Inventory Management System

A modern, full-stack inventory management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application helps businesses manage their products, orders, and inventory efficiently.

## ✨ Features

- 🔐 Secure user authentication and authorization
- 📦 Product management with categories and subcategories
- 📊 Real-time inventory tracking
- 🛒 Order processing and management
- 📈 Analytics and reporting dashboard
- 🎨 Modern, responsive UI with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/utpal-kumar-08/inventory-management.git
cd inventory-management
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
```bash
# In backend directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🏗️ Project Structure

```
├── frontend/          # React frontend application
│   ├── src/          # Source files
│   ├── public/       # Static files
│   └── package.json  # Frontend dependencies
│
└── backend/          # Node.js backend application
    ├── services/     # Microservices
    ├── config/       # Configuration files
    └── package.json  # Backend dependencies
```

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Microservices Architecture

## 📝 API Documentation

The API documentation is available at `/api-docs` when running the backend server. Key endpoints include:

- `/api/auth` - Authentication endpoints
- `/api/products` - Product management
- `/api/orders` - Order processing
- `/api/inventory` - Inventory management
- `/api/stats` - Analytics and reporting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##Contact
Utpal Kumar(utpal-kumar-08)
Project link : 

- Thanks to all contributors who have helped shape this project
- Inspired by modern inventory management systems 