import React from 'react';
import { View } from 'react-native';
import DashRoutes from './pages/AppRoutes/Dash';
import AuthRoutes from './pages/AppRoutes/Auth';
import { useAuth } from './context/auth';

const Routes = () => {

     const { signed }  =  useAuth();
     const authUser = Boolean(signed);

    return  authUser === false ? <AuthRoutes/> : <DashRoutes/> ;
}

export default Routes;