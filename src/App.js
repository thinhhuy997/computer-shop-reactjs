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
import Account from './pages/Account';
import { InDevelopmentPage } from './pages/InDevelopmentPage';
import NotePage from './pages/NotePage';
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
        <AuthProvider><CartProvider>
            <HeaderPage/>
            <Routes>
                {/* <HeaderPage/> */}
                <Route index element={<Home/>} />
                <Route path="login-signup" element={<LoginAndSignup />} />
                <Route path="collections/:categoryName" element={<Collection />} >
                </Route>
                <Route path="search/" element={<Search />} >
                </Route>
                <Route path="product/:slug" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="account" element={<Account />} />
                {/* 404 not found page */}
                <Route path="*" element={<InDevelopmentPage />} />
                {/* testing jwt page */}
                <Route path="note" element={<NotePage/>} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
