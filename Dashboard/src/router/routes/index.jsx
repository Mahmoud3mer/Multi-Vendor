import MainLayout from './../../layout/MainLayout';
import privateRoutes from './privateRoutes';

const getRoutes = () => {
    return {
        path: '/',
        element: <MainLayout/>,
        children: privateRoutes
    }
}

export default getRoutes;