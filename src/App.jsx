import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import SkinCare from "./pages/SkinCare";
import Contacts from "./pages/Contacts";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Treatment from "./pages/Treatment";
import Checkout from "./pages/Register";
import ReviewsPage from "./pages/ReviewsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <>
     
     <Header/>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/skincare" element={<SkinCare />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/treatment" element={<Treatment />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

