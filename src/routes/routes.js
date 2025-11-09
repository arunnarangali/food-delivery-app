import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';

export const routes = [
  {
    path: '/',
    element: Home,
    protected: false
  },
  {
    path: '/menu',
    element: Menu,
    protected: false
  },
  {
    path: '/cart',
    element: Cart,
    protected: true
  },
  {
    path: '/checkout',
    element: Checkout,
    protected: true
  },
  {
    path: '/login',
    element: Login,
    protected: false
  }
];
