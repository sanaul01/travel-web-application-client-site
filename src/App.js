import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import CreateBlogs from "./Pages/SideBar/CreateBlogs/CreateBlogs";
import MakeAdmin from "./Pages/SideBar/MakeAdmin/MakeAdmin";
import SideBar from "./Pages/SideBar/SideBar/SideBar";
import SidebarHome from "./Pages/SideBar/SidebarHome/SidebarHome";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/sidebar"
            element={
              <PrivateRoute>
                <SideBar></SideBar>
              </PrivateRoute>
            }
          >
            <Route exact path={`/sidebar`} element={<SidebarHome />} />
            <Route
              path={`/sidebar/makeadmin`}
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route
              path={`/sidebar/createblogs`}
              element={
                <AdminRoute>
                  <CreateBlogs />
                </AdminRoute>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
