import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFount from "./Shared/NotFount/NotFount";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Checkout from "./pages/Checkout/Checkout";
import AddService from "./pages/AddService/AddService";
import ManegService from "./pages/ManegService/ManegService";
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from "./pages/Login/SocialLogin/SocialLogin";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add/service"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/maneg/service"
          element={
            <RequireAuth>
             <ManegService></ManegService>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    
    </div>
  );
}

export default App;
