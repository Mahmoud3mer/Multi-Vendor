import { useEffect, useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/Reducers/authReducer";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [dataError, setDataError] = useState({
        emailError: "",
        passwordError: "",
    });

    const [hidePass, setHidePass] = useState(true);

    const selector = useSelector( state => state.auth)
    const {loader, errorMessage, successMessage} = selector;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const cssOverrideProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        margin: '0 auto'
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage,{
                duration: 2000
            })
            dispatch(clearMessage())
        }
        if (successMessage) {
            toast.success(successMessage,{
                duration: 2000
            })
            dispatch(clearMessage())
            navigate('/')
        }
    }, [errorMessage, successMessage])

    const inputHandel = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value,
        });

        if (name === 'email') {
            let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
            if (!regexEmail.test(value)) {
                setDataError({
                    ...dataError,
                    emailError: 'Email not valid!'
                })
            }else if (value === '') {
                setDataError({
                    ...dataError,
                    emailError: 'Email is required!'
                })
            }
        }

        if (name === 'password') {
            let regexPass = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
            if (!regexPass.test(value)) {
                setDataError({
                    ...dataError,
                    passwordError: 'Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters'
                })
            }else if (value === '') {
                setDataError({
                    ...dataError,
                    passwordError: 'Password is required!'
                })
            }
        }
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(data));
    };

    const showHidePass = () => {
        setHidePass(hidePass === true ? false : true);
    };

    return (
        <div className="bg-[#cdcae9] w-screen h-screen flex justify-center items-center">
            <div className="w-[350px] p-2 text-[#ffffff]">
                <div className="bg-[#1c1b1d] p-4 rounded-md">
                    
                    <div className="h-[70px] flex justify-center items-center">
                        <div className="w-[180p] h-[50px]">
                            <img className="w-full h-full" src=".././../../public/images/logo.png" alt="logo" />
                        </div>
                    </div>

                    <form onSubmit={(event) => handelSubmit(event)}>
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-Mail"
                                className="outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2"
                                value={data.email}
                                onChange={(e) => inputHandel(e)}
                            />
                            {/* { dataError.emailError && <div className="text-red-500 text-sm m-0">{dataError.emailError}</div>} */}
                        </div>

                        <div className="flex flex-col gap-1 mb-3 relative">
                            <label htmlFor="password">Password</label>
                            <input
                                type={hidePass === true ? "password" : "text"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2"
                                value={data.password}
                                onChange={(e) => inputHandel(e)}
                            />
                            {hidePass === true ? (
                                <span
                                    className="absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer"
                                    onClick={showHidePass}
                                >
                                    <GoEyeClosed />
                                </span>
                            ) : (
                                <span
                                    className="absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer"
                                    onClick={showHidePass}
                                >
                                    <GoEye />
                                </span>
                            )}
                        </div>

                        <button disabled={loader? true : false} className="bg-slate-800 w-full px-7 py-2 mb-3 rounded-md text-white hover:shadow-blue-300 hover:shadow-lg hover:scale-95 transition duration-200">
                            {
                                loader? <BeatLoader color="#ffffff" cssOverride={cssOverrideProperties} size={15}/> : 'Login'
                            }
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
