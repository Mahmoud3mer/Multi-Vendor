import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { useEffect } from 'react';
import getRoutes from './router/routes/index';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    // console.log(routes);
    setAllRoutes([...allRoutes, routes]);
},[])
  
  return <Router allRoutes={allRoutes}/>
}

export default App
