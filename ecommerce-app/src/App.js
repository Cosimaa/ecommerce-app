import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/guest/Register";
import Login from "./pages/guest/Login";
import Home from "./pages/guest/Home";
import Payment from "./pages/guest/Payment";
import ThankForBuy from "./pages/guest/ThankForBuy";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ForgetPassword from "./pages/guest/ForgetPassword";
import ConfirmCode from "./components/ConfirmCode";
import CreateNewPassword from "./components/CreateNewPassword";
import SuccessGetNewPassword from "./components/SuccessGetNewPassword";
import Steel from "./components/Steel";
import ElectricDevices from "./components/ElectricDevices";
import Machines from "./components/Machines";
import WaterTubes from "./components/WaterTubes";
import AdminCustomerChat from "./components/AdminCustomerChat";
import AdminCustomerList from "./components/AdminCustomerList";
import AdminChatBox from "./components/AdminChatBox";
import AdminProductList from "./components/AdminProductList";
import AdminProductCreate from "./components/AdminProductCreate";
import AdminProductReview from "./components/AdminProductReview";
import AdminBrandList from "./components/AdminBrandList";
import AdminCategoryList from "./components/AdminCategoryList";
import AdminOrderList from "./components/AdminOrderList";
import AdminRefundRequest from "./components/AdminRefundRequest";
import AdminRefundSettings from "./components/AdminRefundSettings";
import AdminCategoryCreate from "./components/AdminCategoryCreate";
import AdminBrandCreate from "./components/AdminBrandCreate";
import AdminOrderDetails from "./components/AdminOrderDetails";
import ProductInfo from "./pages/guest/ProductInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/confirmCode" element={<ConfirmCode />} />
        <Route path="/successGetNewPassword" element={<SuccessGetNewPassword />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productInfo" element={<ProductInfo />} />
        <Route path="/thankyou" element={<ThankForBuy />} />
        <Route path="/category/steel" element={<Steel />} />
        <Route path="/category/electric" element={<ElectricDevices />} />
        <Route path="/category/tubes" element={<WaterTubes />} />
        <Route path="/category/machines" element={<Machines />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customer/chat" element={<AdminCustomerChat />} />
        <Route path="/admin/customer/list" element={<AdminCustomerList />} />
        <Route path="/admin/customer/chatbox" element={<AdminChatBox />} />
        <Route path="/admin/product/list" element={<AdminProductList />} />
        <Route path="/admin/product/create" element={<AdminProductCreate />} />
        <Route path="/admin/product/review" element={<AdminProductReview />} />
        <Route path="/admin/brand/list" element={<AdminBrandList />} />
        <Route path="/admin/brand/create" element={<AdminBrandCreate />} />
        <Route path="/admin/order/list" element={<AdminOrderList />} />
        <Route path="/admin/order/details" element={<AdminOrderDetails />} />
        <Route path="/admin/category/list" element={<AdminCategoryList />} />
        <Route path="/admin/category/create" element={<AdminCategoryCreate />} />
        <Route path="/admin/refund/request" element={<AdminRefundRequest />} />
        <Route path="/admin/refund/settings" element={<AdminRefundSettings />} />
      </Routes>
    </BrowserRouter>
  )
}