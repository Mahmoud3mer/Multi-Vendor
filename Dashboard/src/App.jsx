import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { useEffect } from 'react';
import getRoutes from './router/routes/index';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { get_user } from './store/Reducers/authReducer';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  const {role , userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(get_user());
    }
  },[])

  useEffect(() => {
    const routes = getRoutes();
    // console.log(routes);
    setAllRoutes([...allRoutes, routes]);
},[])
  
  return <Router allRoutes={allRoutes}/>
}

export default App
