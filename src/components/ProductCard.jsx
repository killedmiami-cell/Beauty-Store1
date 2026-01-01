import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { toggleLike } from "../features/likes/likesSlice"; // если есть лайки
import './ProductCard.css'
export default function ProductCard({ product, liked }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  
  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(product));
  };

  return (
    <div className="lux-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} />
      <div className="lux-card-info">
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <button className="like-btn" onClick={handleLikeClick}>
          {liked ? "❤️" : "🤍"}
        </button>
      
        <button className="add-cart-btn" onClick={handleAddToCartClick}>
          В корзину
        </button>
      </div>
    </div>
  );
}

