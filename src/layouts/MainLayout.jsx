import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../components/Loading/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#EAF0F2] dark:bg-slate-800 text-base-content py-10">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
