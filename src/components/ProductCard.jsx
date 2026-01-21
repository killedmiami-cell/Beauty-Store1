import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { toggleFavorite } from "../features/favorites/favoritesSlice"; // Избранное
import './ProductCard.css';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const favorites = useSelector((state) => state.favorites.items);
  const liked = favorites.some((item) => item.id === product.id);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="lux-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} />
      <div className="lux-card-info">
        <h3>{product.name}</h3>
        <span>${product.price.toLocaleString()}</span>

        <button className={`like-btn ${liked ? "active" : ""}`} onClick={handleLikeClick}>
          {liked ? "❤️" : "🤍"}
        </button>

        <button className="add-cart-btn" onClick={handleAddToCartClick}>
          В корзину
        </button>
      </div>
    </div>
  );
}

