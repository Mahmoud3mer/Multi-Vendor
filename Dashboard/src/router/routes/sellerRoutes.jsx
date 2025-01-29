import { lazy } from "react";

const SellerDashboard = lazy(() => import("../../views/seller/SellerDashboard"))
const AddProduct = lazy(() => import("../../views/seller/AddProduct"))
const AllProducts = lazy(() => import("../../views/seller/AllProducts"))
const Orders = lazy(() => import("../../views/seller/Orders"))
const Payments = lazy(() => import("../../views/seller/Payments"))
const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"))
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"))
const DiscountProducts = lazy(() => import("../../views/seller/DiscountProducts"))
const Profile = lazy(() => import("../../views/seller/Profile"))
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"))
const Pending = lazy(() => import('../../Pending.jsx'));
const InActive = lazy(() => import('../../InActive.jsx'));

const sellerRoutes = [
    {
        path: 'seller/dashboard',
        element: <SellerDashboard/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/add-product',
        element: <AddProduct/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/all-products',
        element: <AllProducts/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/discount-product',
        element: <DiscountProducts/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/orders',
        element: <Orders/>,
        visibility: ['active', 'inactive','pending']
    },
    {
        path: 'seller/dashboard/payments',
        element: <Payments/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/chat-customer/:customerID',
        element: <SellerToCustomer/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/chat-customer',
        element: <SellerToCustomer/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/chat-support',
        element: <SellerToAdmin/>,
        visibility: ['active', 'inactive','pending']
    },
    {
        path: 'seller/dashboard/profile',
        element: <Profile/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/edit-product/:productID',
        element: <AddProduct/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: 'seller/dashboard/orders/order-details/:orderID',
        element: <OrderDetails/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller',
    },
    {
        path: '/seller/account-inactive',
        element: <InActive />,
        ability: 'seller',
    }
]

export default sellerRoutes;