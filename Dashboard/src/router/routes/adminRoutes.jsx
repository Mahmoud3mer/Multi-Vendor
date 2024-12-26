import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Category = lazy(() => import("../../views/admin/Category"))
const Orders = lazy(() => import("../../views/admin/Orders"))

const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard/>,
        role: 'admin',
        children: [
            {
                path: 'admin/dashboard/orders',
                element: <Orders/>,
            },
            {
                path: 'admin/dashboard/category',
                element: <Category/>,
            }
        ]
    }
]

export default adminRoutes;