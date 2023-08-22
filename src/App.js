import "tailwindcss/tailwind.css";
import { Route, useLocation, useNavigate, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
//Pages
import Home from "./components/pages/Home/Home";
import ProductsPage from "./components/pages/ProductsPage/ProductsPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

//Layout
import Layout from "./components/templates/Layout/Layout";
import About from "./components/pages/ContentPages/About/About";
import Faq from "./components/pages/ContentPages/Faq/Faq";
import Terms from "./components/pages/ContentPages/Terms/Terms";
import ContentLayout from "./components/templates/ContentLayout/ContentLayout";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import AccountPage from "./components/pages/AccountPage/AccountPage";
import { AccountProvider } from "./contexts/AccountContext";
import { AuthContext } from "./contexts/AuthContext";
import AuthPage from "./components/pages/AuthPages/AuthPage";
import { WishlistProvider } from './contexts/WishlistContext';
const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [unmounted, setUnmounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g. checking user authentication status)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const ProtectedRoute = ({ isLoggedInStatus, children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn && location.pathname !== "/auth") {
        navigate("/auth");
      } else if (isLoggedIn && location.pathname === "/auth") {
        console.log("loggedIn");
        navigate("/account");
      }

      return () => {
        setUnmounted(true);
      };
    }, [isLoggedIn, location, navigate, unmounted]);

    return children;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<WishlistProvider><ProductsPage /></WishlistProvider>} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route
            path="/auth"
            element={
              <ProtectedRoute isLoggedInStatus={!isLoggedIn}>
                <AuthPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute isLoggedInStatus={isLoggedIn}>
                <WishlistProvider>
                  <AccountProvider>
                    <AccountPage />
                  </AccountProvider>
                </WishlistProvider>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route element={<ContentLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
