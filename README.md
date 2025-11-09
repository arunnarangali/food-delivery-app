# Food Delivery Web Application

A complete responsive food delivery web application built with React.js, featuring a modern UI and full shopping cart functionality.

## Features

- 🏠 **Home Page**: Hero banner, search bar, top restaurants, and featured items
- 🍕 **Menu Page**: Browse all food items with category filters and sorting
- 🛒 **Cart Page**: Manage cart items with quantity controls
- 💳 **Checkout Page**: Complete order with delivery information form
- 🔐 **Login/Register**: User authentication with localStorage persistence
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 💾 **Data Persistence**: Cart and user data saved in localStorage

## Tech Stack

- React.js (with Vite)
- React Router DOM v6
- Tailwind CSS
- Context API for state management
- localStorage for data persistence

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FoodCard.jsx
│   └── CartItem.jsx
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

## Features Overview

### Home Page
- Gradient hero banner with search functionality
- Top 4 restaurants with ratings and delivery time
- Featured food items in responsive grid
- Quick navigation to menu

### Menu Page
- Display all 15 food items
- Filter by category (All, Pizza, Burgers, Salads, Asian, Desserts)
- Sort by name or price
- Responsive grid layout (1-4 columns based on screen size)

### Cart Page
- View all cart items with images
- Quantity controls (+/- buttons)
- Remove individual items
- Clear entire cart
- Real-time subtotal, delivery fee, and total calculation
- Empty state with "Browse Menu" button

### Checkout Page
- Delivery information form with validation
- Order summary sidebar
- Payment method selection
- Success alert on order placement
- Automatic cart clearing after order

### Login/Register Page
- Toggle between login and register forms
- Form validation
- Mock authentication
- Redirect to home after successful login/register

## State Management

### CartContext
- `addToCart(item)` - Add item or increment quantity
- `removeFromCart(itemId)` - Decrement quantity or remove
- `deleteFromCart(itemId)` - Remove item completely
- `getCartTotal()` - Calculate total price
- `getCartCount()` - Get total item count
- `clearCart()` - Empty the cart

### AuthContext
- `login(email, password)` - Mock authentication
- `register(name, email, password)` - Mock registration
- `logout()` - Clear user data
- `user` - Current user object
- `isAuthenticated` - Authentication status

## Responsive Breakpoints

- Mobile: ≤480px (1 column)
- Tablet: 481-768px (2 columns)
- Laptop: 769-1200px (3 columns)
- Desktop: >1200px (4 columns)

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## License

MIT
