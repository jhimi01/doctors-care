import { Outlet } from "react-router-dom";
import Footer from "./component/share/Footer/Footer";
import Navigationbar from "./component/share/Navigationbar/Navigationbar";
import ScrollTop from "./component/share/ScrollTop";
// import SmoothScroll from "./component/share/SmoothScroll";
// import { Scrollbar } from "smooth-scrollbar/scrollbar";

const MainLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      {/* <Scrollbar>
        <SmoothScroll /> */}
        <Outlet />
        <ScrollTop />
      {/* </Scrollbar> */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
