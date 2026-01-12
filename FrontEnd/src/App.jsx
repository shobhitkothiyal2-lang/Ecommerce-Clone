import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Footer from "./Common/Footer.jsx";
import Headers from "./Common/Header.jsx"; // Make sure this file exists
import Home from "./Home.jsx";
import Product from "./Product/Product.jsx";
import ProductDetails from "./Product/ProductDetails.jsx";
import Wishlist from "./Wishlist/Wishlist.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import CartDrawer from "./Cart/CartDrawer.jsx";
import FloatingButtons from "../Global/FloatingButtons.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions.jsx";
import PaymentsAndOrders from "./PaymentsAndOrders/PaymentsAndOrders.jsx";
import ShippingAndReturns from "./ShippingAndReturns/ShippingAndReturns.jsx";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy.jsx";
import CampusAmbassador from "./CampusAmbassador/CampusAmbassador.jsx";
import SizeChart from "./SizeChart/SizeChart.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import MyReturns from "./MyReturns/MyReturns.jsx";
import Blog from "./Blog/Blog.jsx";
import BlogDetails from "./Blog/BlogDetails.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Careers from "./Careers/Careers.jsx";
import OrderHistory from "./OrderHistory/OrderHistory.jsx";
import Addresses from "./OrderHistory/Addresses.jsx";

function App() {
  return (
    <CartProvider>
      <FloatingButtons />
      <Headers />
      <CartDrawer />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdt/:levelOne" element={<Product />} />
        <Route path="/pdt/:levelOne/:levelTwo" element={<Product />} />
        <Route
          path="/pdt/:levelOne/:levelTwo/:LevelThree"
          element={<Product />}
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/payment-orders" element={<PaymentsAndOrders />} />
        <Route path="/shipping-returns" element={<ShippingAndReturns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cap" element={<CampusAmbassador />} />
        <Route path="/size-chart" element={<SizeChart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/return" element={<MyReturns />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/account/addresses" element={<Addresses />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;