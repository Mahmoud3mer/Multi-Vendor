import { BsCurrencyDollar } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const AdminDashboard = () => {
    return (
        <>
            <div className="px-2 lg:px-7 py-5 z-40 w-full">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">

                    <div className="flex justify-between items-center bg-[#fae8e8] rounded-md p-5 gap-3">
                        <div className="text-[#5c5a5a]">
                            <h1 className="text-3xl font-bold">$3434</h1>
                            <span className="text-md font-medium">Total Sales</span>
                        </div>
                        <div className="bg-[#fa0305] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                            <span><BsCurrencyDollar/></span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#fde2ff] rounded-md p-5 gap-3">
                        <div className="text-[#5c5a5a]">
                            <h1 className="text-3xl font-bold">20</h1>
                            <span className="text-md font-medium">Products</span>
                        </div>
                        <div className="bg-[#760077] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                            <span><MdOutlineProductionQuantityLimits/></span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#e9feea] rounded-md p-5 gap-3">
                        <div className="text-[#5c5a5a]">
                            <h1 className="text-3xl font-bold">50</h1>
                            <span className="text-md font-medium">Sellers</span>
                        </div>
                        <div className="bg-[#038000] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                            <span><FaUsers/></span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#ecebff] rounded-md p-5 gap-3">
                        <div className="text-[#5c5a5a]">
                            <h1 className="text-3xl font-bold">$3434</h1>
                            <span className="text-md font-medium">Orders</span>
                        </div>
                        <div className="bg-[#0200f8] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl">
                            <span><FaCartShopping/></span>
                        </div>
                    </div>

                </div>

                <div></div>

                <div></div>

            </div>
        </>
    )
}

export default AdminDashboard;