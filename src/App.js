import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import UpdateProduct from "./pages/UpdateProduct";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light app">
      {/* <Navbar/>
      <Main/>
      <About/>
      <NewProduct/>
      <ProductList/> */}
<Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/new-product" element={<NewProduct />}></Route>
        <Route path="/product-list" element={<ProductList />}></Route>
        <Route path="/update-product" element={<UpdateProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
