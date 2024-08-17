# ITMart E-Commerce Website

![Project Logo](/src/assets//logo.png)

Welcome to ITMart, a fully responsive and feature-rich e-commerce website built using the MERN stack. This project focuses on providing a seamless shopping experience with functionalities such as product browsing, filtering, sorting, pagination, and user authentication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Product Listing:** Display products with details such as name, image, description, price, brand, and ratings.
- **Filtering:** Filter products by brand, category, and price range.
- **Sorting:** Sort products by price (ascending/descending) and date (newest/oldest).
- **Pagination:** Browse products with pagination controls, including page numbers and next/previous buttons.
- **Authentication:** User authentication using Firebase with Google Sign-In.
- **Cart Management:** Add products to the cart and manage them through a modal interface.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - React Router DOM
  - Axios
  - Daisy UI
  - Flowbit CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Cors
- **Authentication:**
  - Firebase Authentication with Google Sign-In

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/ITMart.git
cd ITMart
Install frontend dependencies:
```

```bash
cd client
npm install
```

## Install backend dependencies:

```bash
cd ../server
npm install
```

## Create a .env file in the server directory:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Set up Firebase for authentication:

Go to Firebase Console and create a new project.
Enable Google Sign-In under Authentication.
Copy your Firebase config and replace the placeholder in your React app.
Run the development server:

Backend:

```bash
cd server
nodemon
```

Frontend:

```bash
cd client
npm start
```

## Usage

Visit the homepage to browse products.
Use the search, filters, and sorting options to find specific products.
Add products to your cart and manage them through the cart modal.
Sign in with Google to access additional features.
Project Structure

```bash
ITMart/
│
├── client/ # Frontend code
│ ├── public/ # Public assets
│ ├── src/ # React source code
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Application pages
│ │ ├── hooks/ # Custom hooks
│ │ └── App.js # Main App component
│ └── package.json # Frontend dependencies
│
└── server/ # Backend code
├── config/ # Configuration files
├── controllers/ # Request handlers
├── models/ # Mongoose models
├── routes/ # API routes
├── utils/ # Utility functions
├── server.js # Main server file
└── package.json # Backend dependencies
```

## API Endpoints

GET /products: Retrieve a list of all products with optional filtering, sorting, and pagination.
GET /products/:id: Get details of a specific product by ID.
POST /login: Authenticate a user using Google Sign-In.
POST /cart: Manage the user's cart items.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request if you have any improvements or new features to add.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or feedback, feel free to reach out:

Name: Abul Monsur Mohammad Kachru
Email: monsur286512@gmail.com
