import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { useNavigate } from "react-router-dom";
import './FavoritesPage.css';

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (favorites.length === 0) return <p className="empty-message">Избранных товаров нет</p>;

  return (
    <div className="favorites-page">
      <h2>Избранное</h2>
      <div className="favorites-grid">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-card">
            <img
              src={item.image}
              alt={item.name}
              onClick={() => navigate(`/product/${item.id}`)}
            />
            <h3>{item.name}</h3>
            <span>${item.price.toLocaleString()}</span>
            <button
              className="like-btn active"
              onClick={() => dispatch(toggleFavorite(item))}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

