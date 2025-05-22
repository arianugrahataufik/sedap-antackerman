import { Outlet } from "react-router-dom";
import Navbar from "../components-guest/Navbar";
import Logo from "../components-guest/Logo";
import Footer from "../components-guest/Footer";

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar /> {/* Navbar di luar main-content */}
      
      <div id="layout-wrapper" className="flex-1 flex flex-col">
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
