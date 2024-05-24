import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/All-Users';
import AllProducts from '../pages/All-Products';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/cart';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'product-category/:categoryName',
                element: <CategoryProduct />
            },
            {
                path: 'product/:id',
                element: <ProductDetails />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'admin-panel',
                element: <AdminPanel />,
                children: [
                    {
                        path: 'all-users',
                        element: <AllUsers />
                    },
                    {
                        path: 'all-products',
                        element: <AllProducts />
                    }
                ]
            }
        ]
    }
])

export default router