import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from './components/headerPage/HeaderPage';
import Home from './pages/Home';
import LoginAndSignup from './pages/LoginAndSignup';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Search from './pages/Search';
import { CartProvider } from './contexts/CartContext';
import {AuthProvider} from './contexts/AuthContext';
function App() {

  // Function to add our give data into cache
  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        alert('Data Added into cache!')
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <HeaderPage/>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="login-signup" element={<LoginAndSignup />} />
              <Route path="collections/:categoryName" element={<Collection />} >
              </Route>
              <Route path="search/" element={<Search />} >
              </Route>
              <Route path="product/:slug" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
