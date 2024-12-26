import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiCategory, BiChat } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";

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
    }
]

export default allNav;