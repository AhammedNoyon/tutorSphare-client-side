import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-base-300 dark:bg-slate-800 text-base-content py-10">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
