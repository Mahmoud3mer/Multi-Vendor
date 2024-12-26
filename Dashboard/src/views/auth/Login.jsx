import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";


const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [hidePass, setHidePass] = useState(true);

  const inputHandel = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value
    })
  }

  const handelSubmit = (e) => {
    e.preventDefault()
  }

  const showHidePass = () => {
    setHidePass(hidePass === true? false : true);
  }

  return (
    <div className='bg-[#cdcae9] w-screen h-screen flex justify-center items-center'>
      <div className='w-[350px] p-2 text-[#ffffff]'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome E-Commerce</h2>
          <p className='text-sm mb-3 font-medium'>Please sign in your account</p>

          <form onSubmit={(event) => handelSubmit(event)}>

            <div className='flex flex-col gap-1 mb-3'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id='email'
                name='email'
                placeholder='E-Mail'
                className='outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2'
                value={data.email}
                onChange={(e) => inputHandel(e)}
              />
            </div>

            <div className='flex flex-col gap-1 mb-3 relative'>
              <label htmlFor="password">Password</label>
              <input
                type={hidePass === true? "password" : "text"}
                id='password'
                name='password'
                placeholder='Password'
                className='outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2'
                value={data.password}
                onChange={(e) => inputHandel(e)}
              />
              {hidePass === true?
              <span className='absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer' onClick={showHidePass}><GoEyeClosed/></span> :
              <span className='absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer' onClick={showHidePass}><GoEye/></span>
              }
            </div>

            <button className='bg-slate-800 w-full px-7 py-2 mb-3 rounded-md text-white hover:shadow-blue-300 hover:shadow-lg hover:scale-95 transition duration-200'>Sign In</button>
          
          <div className='flex items-center justify-center mb-3 gap-3'>
            <p>Don't have an account? <Link to={'/register'} className='font-bold hover:underline transition duration-200'>Sign Up</Link></p>
          </div>

          <div className='w-full flex justify-center items-center mb-3'>
            <div className='w-[45%] h-[1px] bg-slate-700'></div>
            <div className='w-[10%] text-center'>Or</div>
            <div className='w-[45%] h-[1px] bg-slate-700'></div>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center cursor-pointer w-[135px] h-[35px] bg-orange-400 rounded-md shadow-lg hover:shadow-orange-400/50 text-xl hover:scale-105 transition duration-200'>
              <span><FcGoogle/></span>
            </div>

            <div className='flex justify-center items-center cursor-pointer w-[135px] h-[35px] bg-blue-600 rounded-md shadow-lg hover:shadow-blue-700/50 text-xl hover:scale-105 transition duration-200'>
              <span><FaFacebook/></span>
            </div>
          </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
