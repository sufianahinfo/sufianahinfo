# Sufianah Fragrances E-commerce Website

A modern, responsive e-commerce website for Sufianah Fragrances, built with React, Node.js, and MongoDB. This project replicates the design and functionality of the original Sufianah online store.

## Features

### Frontend
- **Modern UI/UX**: Clean, elegant design with gold and black color scheme
- **Responsive Design**: Mobile-first approach, works on all devices
- **Product Catalog**: Browse and filter fragrances by category
- **Product Details**: Detailed product pages with fragrance notes
- **Shopping Cart**: Add/remove items, quantity management
- **Checkout Process**: Complete order flow with form validation
- **Admin Dashboard**: Manage products, orders, and store analytics
- **Search Functionality**: Find products by name or description
- **Newsletter Subscription**: Email signup for updates

### Backend
- **RESTful API**: Well-structured API endpoints
- **Authentication**: JWT-based admin authentication
- **Product Management**: CRUD operations for products
- **Order Management**: Track and manage customer orders
- **Database**: MongoDB with optimized schemas
- **Security**: Input validation, rate limiting, CORS protection

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Context API for state management
- CSS3 with custom properties
- Responsive design with CSS Grid/Flexbox

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Multer for file uploads

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sufianah-clone
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   - Create a `.env` file in the `backend` directory
   - Add the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sufianah
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRE=30d
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend (port 3000) servers concurrently.

### Alternative: Run servers separately

**Backend only:**
```bash
cd backend
npm run dev
```

**Frontend only:**
```bash
cd frontend
npm run dev
```

## Project Structure

```
sufianah-clone/
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── context/            # React Context providers
│   │   ├── assets/             # Static assets
│   │   └── App.jsx             # Main App component
│   ├── public/                 # Public assets
│   └── package.json
├── backend/
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── middleware/             # Custom middleware
│   ├── utils/                  # Utility functions
│   └── server.js               # Express server
├── package.json                # Root package.json
└── README.md
```

## API Endpoints

### Products
- `GET /api/products` - Get all products with filtering
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/slug/:slug` - Get product by slug
- `GET /api/products/featured/list` - Get featured products
- `GET /api/products/sale/list` - Get products on sale
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Admin registration

### Orders
- `GET /api/orders` - Get all orders (Admin)
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin)

## Admin Access

**Demo Credentials:**
- Email: admin@sufianah.com
- Password: admin123

Access the admin panel at: `http://localhost:3000/admin/login`

## Features in Detail

### Product Management
- Add/edit/delete products
- Upload product images
- Set pricing and discounts
- Manage inventory
- Categorize products (Men/Women/Unisex)
- Add fragrance notes and descriptions

### Order Management
- View all orders
- Update order status
- Track order details
- Customer information

### Shopping Experience
- Browse products by category
- Search functionality
- Product filtering and sorting
- Detailed product pages
- Shopping cart with persistence
- Secure checkout process

## Styling

The project uses a custom CSS approach with:
- CSS Custom Properties (variables) for theming
- Mobile-first responsive design
- Modern CSS Grid and Flexbox layouts
- Smooth animations and transitions
- Consistent spacing and typography

## Performance Optimizations

- Lazy loading for images
- Optimized database queries
- Efficient state management
- Minimal bundle size
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the original Sufianah online store
- Built with modern web technologies
- Designed for optimal user experience

## Support

For support or questions, please contact the development team or create an issue in the repository.
