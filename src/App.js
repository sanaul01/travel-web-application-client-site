import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import CreateBlogs from "./Pages/SideBar/CreateBlogs/CreateBlogs";
import SideBar from "./Pages/SideBar/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sidebar" element={<PrivateRoute><SideBar></SideBar></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createblogs" element={<CreateBlogs />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
