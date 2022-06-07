import { Outlet } from "react-router-dom";
import Navbar from "./component/UI/Navbar";
import Footer from "./component/UI/Footer";
import ScrollTop from "./component/UI/ScrollTop";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
