import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { get_user } from "../store/Reducers/authReducer";

const Home = () => {
    const { role } = useSelector(state => state.auth);

    if(role === 'admin') return <Navigate to={'/admin/dashboard'} replace/>
    else if(role === 'seller') return <Navigate to={'/seller/dashboard'} replace/>
    else return <Navigate to={'/login'} replace/>
};

export default Home;
