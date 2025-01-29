import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiCategory, BiChat } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { MdOutlineDiscount, MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { FcAddDatabase, FcCustomerSupport } from "react-icons/fc";
import { FaBorderAll } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        role: 'admin',
        path: '/admin/dashboard',
        icon: <TbLayoutDashboard/>
    },
    {
        id: 2,
        title: 'Orders',
        role: 'admin',
        path: '/admin/dashboard/orders',
        icon: <AiOutlineShoppingCart/>
    },
    {
        id: 3,
        title: 'Category',
        role: 'admin',
        path: '/admin/dashboard/category',
        icon: <BiCategory/>
    },
    {
        id: 4,
        title: 'Sellers',
        role: 'admin',
        path: '/admin/dashboard/sellers',
        icon: <FaUsers/>
    },
    {
        id: 5,
        title: 'Payment Request',
        role: 'admin',
        path: '/admin/dashboard/payment-request',
        icon: <MdPayment/>
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers',
        icon: <FaUserTimes/>
    },
    {
        id: 7,
        title: 'Sellers Request',
        role: 'admin',
        path: '/admin/dashboard/sellers-request',
        icon: <FaCodePullRequest/>
    },
    {
        id: 8,
        title: 'Live Chat',
        role: 'admin',
        path: '/admin/dashboard/chat-seller',
        icon: <BiChat/>
    },
    {
        id: 9,
        title: 'Dashboard',
        role: 'seller',
        path: '/seller/dashboard',
        icon: <RiDashboard2Line/>
    },
    {
        id: 10,
        title: 'Add Product',
        role: 'seller',
        path: '/seller/dashboard/add-product',
        icon: <FcAddDatabase/>
    },
    {
        id: 11,
        title: 'All Products',
        role: 'seller',
        path: '/seller/dashboard/all-products',
        icon: <FaBorderAll/>
    },
    {
        id: 12,
        title: 'Discount Product',
        role: 'seller',
        path: '/seller/dashboard/discount-product',
        icon: <MdOutlineDiscount/>
    },
    {
        id: 13,
        title: 'Orders',
        role: 'seller',
        path: '/seller/dashboard/orders',
        icon: <AiOutlineShoppingCart/>
    },
    {
        id: 14,
        title: 'Payments',
        role: 'seller',
        path: '/seller/dashboard/payments',
        icon: <MdPayment/>
    },
    {
        id: 15,
        title: 'Chat Customer',
        role: 'seller',
        path: '/seller/dashboard/chat-customer',
        icon: <BiChat/>
    },
    {
        id: 16,
        title: 'Chat Support',
        role: 'seller',
        path: '/seller/dashboard/chat-support',
        icon: <FcCustomerSupport/>
    },
    {
        id: 17,
        title: 'Profile',
        role: 'seller',
        path: '/seller/dashboard/profile',
        icon: <CgProfile/>
    }
]

export default allNav;