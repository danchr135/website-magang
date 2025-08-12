import React, { Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import routes from "./config";

// Import semua halaman secara statis
import Home from "../pages/Home";
import Mission from "../pages/mission/mission";

const getPageComponent = () => {
  const path = window.location.pathname;
  switch (path) {
    case "/":
    case "/home":
      return <Home />;
    case "/mission":
      return <Mission />;
    case "/product":
      return <Home />; // Product diarahkan ke Home
    // ...tambahkan path lain jika perlu...
    default:
      return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          404 - Page Not Found
        </div>
      );
  }
};

const Router = () => (
  <>
    <Styles />
    <Header />
    <Suspense fallback={<div>Loading...</div>}>{getPageComponent()}</Suspense>
    <Footer />
  </>
);

export default Router;
