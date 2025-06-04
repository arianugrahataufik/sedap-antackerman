import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import GuestLayout from "./layouts/GuestLayout";
import About from "./pages/guest/About";
import Product from "./pages/guest/Product";
import Testimonial from "./pages/guest/Testimonial";
import CekMember from "./pages/CekMember";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Home = React.lazy(() => import("./pages/guest/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="p-4">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          <Route element={<GuestLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Route>
          <Route path="/cek-member" element={<CekMember />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
