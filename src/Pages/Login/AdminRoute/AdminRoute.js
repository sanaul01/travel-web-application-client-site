import { Box } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import spinner from "../../../images/spinner.gif";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();

  //spinner
  if (isLoading) {
    return (
      <Box
        sx={{
          backgroundColor: "#000",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ margin: "0 auto" }} src={spinner} alt="" />
      </Box>
    );
  }
  //returns protected routes
  if (user?.email && admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
