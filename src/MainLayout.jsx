import { Outlet } from "react-router-dom";
import Footer from "./component/share/Footer/Footer";
import Navigationbar from "./component/share/Navigationbar/Navigationbar";

const MainLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
