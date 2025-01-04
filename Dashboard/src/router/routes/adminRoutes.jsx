import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Category = lazy(() => import("../../views/admin/Category"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Sellers = lazy(() => import("../../views/admin/Sellers"))
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"))
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"))
const SellersRequest = lazy(() => import("../../views/admin/SellersRequest"))
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"))
const SellerDetails = lazy(() => import('../../views/admin/SellerDetails'))

const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard/>,
        role: 'admin',
    },
    {
        path: 'admin/dashboard/orders',
        element: <Orders/>,
    },
    {
        path: 'admin/dashboard/category',
        element: <Category/>,
    },
    {
        path: '/admin/dashboard/sellers',
        element: <Sellers/>,
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest/>,
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element: <DeactiveSellers/>,
    },
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellersRequest/>,
    },
    {
        path: 'admin/dashboard/chat-seller',
        element: <ChatSeller/>,
    },
    {
        path: 'admin/dashboard/seller/details/:sellerID',
        element: <SellerDetails/>,
    }
]

export default adminRoutes;