import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, seller_register } from '../../store/Reducers/authReducer';
// import { BeatLoader } from "react-spinners";
import toast from 'react-hot-toast';

// Handel Formik
const initialValues = {
  name: '',
  email: '',
  password: '',
}

const validate = values => {
  let errors = {};
  let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  let regexPass = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  if (!values.name) {
    errors.name = 'Name is required!'
  }
  if (!values.email) {
    errors.email = 'Email is required!'
  } else if (!regexEmail.test(values.email)) {
    errors.email = 'Email not valid!'
  }
  if (!values.password) {
    errors.password = 'Password is required!'
  } else if (!regexPass.test(values.password)) {
    errors.password = `1 lowercase letter,
1 uppercase letter,
1 number,
be at least 8 characters.`
  }
  return errors;
}

const Register = () => {
  const [hidePass, setHidePass] = useState(true);
  const showHidePass = () => {
    setHidePass(hidePass === true ? false : true);
  }

  const selector = useSelector(state => state.auth);
  const {loader, errorMessage, successMessage} = selector;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = values => {
    dispatch(seller_register(values));
    console.log(values);
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
      navigate('/login')
  }
  },[errorMessage, successMessage])

  const cssOverrideProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
}


  return (
    <div className='bg-[#cdcae9] w-screen h-screen flex justify-center items-center'>
      <div className='w-[350px] p-2 text-[#ffffff]'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome E-Commerce</h2>
          <p className='text-sm mb-3 font-medium'>Please register your account</p>

          <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form>
              <div className='flex flex-col gap-1 mb-3'>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id='name'
                  name='name'
                  placeholder='Name'
                  className={`outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2`}
                />
                <ErrorMessage name='name' component={'div'} className='text-red-700 text-xs font-semibold m-0' />
              </div>

              <div className='flex flex-col gap-1 mb-3'>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id='email'
                  name='email'
                  placeholder='E-Mail'
                  className={`outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2`}
                />
                <ErrorMessage name='email' component={'div'} className='text-red-700 text-xs font-semibold m-0' />
              </div>

              <div className='flex flex-col gap-1 mt-3 relative'>
                <label htmlFor="password">Password</label>
                <Field
                  type={hidePass === true ? "password" : "text"}
                  id='password'
                  name='password'
                  placeholder='Password'
                  className={`outline-none bg-transparent border border-slate-400 rounded-md px-3 py-2`}
                />
                {hidePass === true ?
                  <span className='absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer' onClick={showHidePass}><GoEyeClosed /></span> :
                  <span className='absolute bottom-[12px] right-[12px] text-gray-900 cursor-pointer' onClick={showHidePass}><GoEye /></span>
                }
              </div>
              <pre className='mt-0 mb-2'><ErrorMessage name='password' component={'code'} className='text-red-700 text-[12px] font-semibold leading-none' /></pre>
              <div className='flex items-center gap-3 mb-3 w-full'>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500'
                />

                <label htmlFor="checkbox">I agree to privacy policy & terms</label>
              </div>

              <button type='submit'
                className={`bg-slate-800 w-full px-7 py-2 mb-3 rounded-md text-white hover:shadow-blue-300 hover:shadow-lg hover:scale-95 transition duration-200`}
              >
                {/* {
                  loader ? <BeatLoader cssOverride={cssOverrideProperties} size={15} color='#ffffff'/> : 'Sign Up'
                } */}
                {
                  loader ? 'Sign Up...' : 'Sign Up'
                }
              </button>

              <div className='flex items-center justify-center mb-3 gap-3'>
                <p>Already have an account? <Link to={'/login'} className='font-bold hover:underline transition duration-200'>Sign In</Link></p>
              </div>

              <div className='w-full flex justify-center items-center mb-3'>
                <div className='w-[45%] h-[1px] bg-slate-700'></div>
                <div className='w-[10%] text-center'>Or</div>
                <div className='w-[45%] h-[1px] bg-slate-700'></div>
              </div>

              <div className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center cursor-pointer w-[135px] h-[35px] bg-orange-400 rounded-md shadow-lg hover:shadow-orange-400/50 text-xl hover:scale-105 transition duration-200'>
                  <span><FcGoogle /></span>
                </div>

                <div className='flex justify-center items-center cursor-pointer w-[135px] h-[35px] bg-blue-600 rounded-md shadow-lg hover:shadow-blue-700/50 text-xl hover:scale-105 transition duration-200'>
                  <span><FaFacebook /></span>
                </div>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register;
