import { Outlet } from "react-router-dom";
import Footer from "./component/share/Footer/Footer";
import Navigationbar from "./component/share/Navigationbar/Navigationbar";
import ScrollTop from "./component/share/ScrollTop";

const MainLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
      <ScrollTop></ScrollTop>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
