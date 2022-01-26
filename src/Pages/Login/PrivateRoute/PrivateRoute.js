import { Box } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import spinner from '../../../images/spinner.gif'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    //spinner 
    if (isLoading) {
        return (
            <Box
                sx={{
                    backgroundColor: '#000',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img style={{ margin: '0 auto' }} src={spinner} alt="" />
            </Box>
        )
    }
    //returns protected routes
    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;