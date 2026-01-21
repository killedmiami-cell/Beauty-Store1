import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { addOrder } from "../features/orders/ordersSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="lux-cart">
      <h1>Your Cart</h1>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>сом{item.price}</p>

          <div className="qty">
            <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
          </div>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {/* <h2>Total: ${total}</h2> */}
      <h2>Итого: {total.toLocaleString()} сом</h2>


      <button
        onClick={() => {
          dispatch(addOrder({ items, total }));
          dispatch(clearCart());
          alert("Order sent!");
        }}
      >
        Checkout
      </button>
    </div>
  );
}









