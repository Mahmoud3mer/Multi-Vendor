import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Category = lazy(() => import("../../views/admin/Category"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Sellers = lazy(() => import("../../views/admin/Sellers"))
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"))

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
    }
]

export default adminRoutes;