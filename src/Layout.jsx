import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToHash from "./components/helper/ScrollToHash";

const Layout = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;