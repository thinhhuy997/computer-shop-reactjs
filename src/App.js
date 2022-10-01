import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from './components/headerPage/HeaderPage';
import MainMenu from './components/mainMenu/MainMenu';
import IntroductorySection from './components/introductorySection/IntroductorySection';
import BestSeller from './components/bestSeller/BestSeller';
import ShowingProduct from './components/showingProduct/ShowingProduct';
import Home from './pages/Home';
import LoginAndSignup from './pages/LoginAndSignup';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login-signup" element={<LoginAndSignup />} />
          <Route path="collections" element={<Collection />} />
          <Route path="product" element={<ProductDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
