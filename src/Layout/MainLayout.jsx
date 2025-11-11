import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import BottomToTop from "../Components/BottomToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-20">
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <BottomToTop></BottomToTop>
    </div>
  );
};

export default MainLayout;
