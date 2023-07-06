import { Routes, Route } from 'react-router-dom';

//Pages
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

//Layout
import Layout from "./components/templates/Layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />}/>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;
