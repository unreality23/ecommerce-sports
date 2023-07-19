import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom";
//Pages
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

//Layout
import Layout from "./components/templates/Layout/Layout";
import About from "./components/pages/ContentPages/About/About";
import Faq from "./components/pages/ContentPages/Faq/Faq";
import Terms from "./components/pages/ContentPages/Terms/Terms";
import ContentLayout from "./components/templates/ContentLayout/ContentLayout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
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
