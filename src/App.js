import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom";
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
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import AccountPage from './components/pages/AccountPage/AccountPage';
import { AccountProvider } from './contexts/AccountContext';
import SignIn from './components/pages/AuthPages/SignInPage';
import SignUp from './components/pages/AuthPages/SignUpPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/account" element={<AccountProvider><AccountPage /></AccountProvider>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
