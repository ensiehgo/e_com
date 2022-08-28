import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const ProtectedRoute = ({isAdmin, children}) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    if(!loading){
        if(!isAuthenticated){
            return <Navigate to="/login"/>;
        }
        if(isAdmin && user.role !== "admin"){
            return <Navigate to="/login"/>;
        }
    }
    return children ? children : <Outlet/>;

}

export default ProtectedRoute;