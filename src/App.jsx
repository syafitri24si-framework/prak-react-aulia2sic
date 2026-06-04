import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import './assets/tailwind.css';

// lazy
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Products = React.lazy(() => import("./pages/Products"));
const Components = React.lazy(() => import("./pages/Components"));
const FiturXYZ = React.lazy(() => import("./pages/FiturXYZ"));



const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/components" element={<Components />} />
          <Route path="/FiturXYZ" element={<FiturXYZ />} />


          
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;