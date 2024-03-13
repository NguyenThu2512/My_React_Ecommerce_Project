
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Introduction from './Pages/Introduction';
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import ProductCategory from './Pages/ProductCategory';
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/introduction" element={<Introduction/>} />
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/product-detail" element={<ProductDetail />} >
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/women" element={<ProductCategory category="women" />} />
          <Route path="/men" element={<ProductCategory category="men" />} />
          <Route path="/blog" element={<Blog/>}>
            <Route path=":blogId" element={<Blog/>}/>
          </Route>

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login-signup" element={<LoginSignup/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
