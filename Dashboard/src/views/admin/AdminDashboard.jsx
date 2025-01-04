import { BsCurrencyDollar } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const state = {
        series: [
            {
                name:'Orders',
                data: [25,28,30,35,45,55,60,70,88,100,110,150]
            },
            {
                name:'Revenue',
                data: [30,38,39,45,50,55,65,76,91]
            },
            {
                name:'Sellers',
                data: [29,28,30,35,45,50,60,70,80]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                forColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: 0.5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                    },
                    options: {
                        plotOptions: {
                            bar:{
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    },
                    
                }
            ]
        }
    }


    return (
        <>
            <div className="px-2 lg:px-7 py-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full">
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
                <div className="w-full pt-7 flex flex-wrap">
                    <div className="bg-[#6a5fdf] w-full lg:w-7/12 p-2 rounded-md">
                        <Chart type="bar" series={state.series} options={state.options} height={350}/>
                    </div>
                    <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
                        <div className="bg-[#6a5fdf] rounded-md p-4 overflow-auto h-[397px]">
                            <div className="flex justify-between text-[#d0d2d6]">
                                <h1 className="font-semibold">Recent Seller Message</h1>
                                <button className="text-sm font-semibold"><Link>View All</Link></button>
                            </div>
                        <div className="mt-5">
                            <div className="flex gap-1 py-2">
                                <div className="bg-[#7368eb] w-[35px] h-[35px] rounded-full flex justify-center items-center basis-1/12">
                                    <img src="../../../public/images/admin.jpg" alt="" className="w-[25px] h-[25px] rounded-full" />
                                </div>
                                <div className="bg-gray-800 px-4 py-3 rounded-md shadow-gray-500/5 flex flex-col gap-2 basis-11/12 text-[#d0d2d6]">
                                    <div className="flex justify-between">
                                        <h3>Admin</h3>
                                        <p>4 day ago</p>
                                    </div>
                                    <p className="w-full bg-gray-600 text-sm p-2 rounded-lg outline-none">how are you</p>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
                <div className="bg-[#6a5fdf] rounded-md w-full p-4 mt-6">
                    <div className="flex justify-between text-[#d0d2d6]">
                        <h1 className="font-semibold">Recent Orders</h1>
                        <button className="text-sm font-semibold"><Link>View All</Link></button>
                    </div>
                    
                    <table className="w-full">
                        <thead className="text-[#d0d2d6] text-sm border-b border-slate-700 text-left">
                            <tr>
                                <th scope="col" className='py-3 px-4'>ORDER ID</th>
                                <th scope="col" className='py-3 px-4'>PRICE</th>
                                <th scope="col" className='py-3 px-4'>PAYMENT STATUS</th>
                                <th scope="col" className='py-3 px-4'>ORDER STATUS</th>
                                <th scope="col" className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-[#d0d2d6]">
                            {
                                [1,2,3,4,6,7].map((element, i) => <tr key={i}>
                                <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>#343434</td>
                                <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>$3654</td>
                                <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                <td scope="row" className='py-3 px-4 font-medium whitespace-nowrap'>View</td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;