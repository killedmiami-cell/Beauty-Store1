import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";
import "./MiniCart.css";

export default function MiniCart({ open, onClose }) {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  if (!open) return null;

  return (
    <div className="mini-cart">
      <div className="mini-cart-header">
        <h4>Корзина</h4>
        <button onClick={onClose}>✕</button>
      </div>

      {items.length === 0 && <p>Корзина пуста</p>}

      {items.map((item) => (
        <div className="mini-cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="info">
            <p>{item.name}</p>
            <span>{item.price}</span>

            <div className="qty">
              <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>
          </div>

          <button
            className="remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            ✕
          </button>
        </div>
      ))}

      <div className="mini-cart-footer">
        {/* <strong>Total: {total}</strong> */}
        <strong>Total: ${total.toLocaleString()}</strong>

      </div>
    </div>
  );
}
