import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { addOrder } from "../features/orders/ordersSlice";
import "./Checkout.css";

export default function Checkout() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Корзина пуста");
      return;
    }

    dispatch(addOrder({ items, total }));
    dispatch(clearCart());

    alert("Заказ успешно оформлен!");
  };

  return (
    <section className="checkout-page">
      <h1 className="checkout-title">Оформление заказа</h1>

      <div className="checkout-wrapper">
        {/* ФОРМА */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Данные покупателя</h2>

          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Телефон" required />
          <input type="text" placeholder="Адрес доставки" required />

          <button type="submit" className="checkout-btn">
            Подтвердить заказ
          </button>
        </form>

        {/* ИНФОРМАЦИЯ О ЗАКАЗЕ */}
        <div className="checkout-summary">
          <h2>Ваш заказ</h2>

          {items.length === 0 && <p>Корзина пуста</p>}

          {items.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>{item.name} × {item.quantity}</span>
              <b>{item.price}</b>
            </div>
          ))}

          <hr />
          <div className="checkout-total">
            <span>Итого:</span>
            <strong>сом{total}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
