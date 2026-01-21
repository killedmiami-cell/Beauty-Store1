import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

export default function FavoriteButton({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <button
      className={`favorite-btn ${isFavorite ? "active" : ""}`}
      onClick={() => dispatch(toggleFavorite(product))}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

