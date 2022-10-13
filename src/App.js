import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginAndSignup from './pages/LoginAndSignup';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login-signup" element={<LoginAndSignup />} />
          <Route path="collections/:categoryName" element={<Collection />} >
          </Route>
          <Route path="search/" element={<Search />} >
          </Route>
          <Route path="product/:slug" element={<ProductDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
