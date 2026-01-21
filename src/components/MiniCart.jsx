import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./MiniCart.css";

export default function MiniCart({ open, onClose }) {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [payWithPayPal, setPayWithPayPal] = useState(false);

  if (!open) return null;

  const submitOrder = async () => {
    if (!name || !address) {
      alert("Заполните имя и адрес");
      return;
    }

   

    dispatch(clearCart());
    setCheckout(false);
    setPayWithPayPal(false);
    onClose();
    alert("Заказ отправлен!");
  };

  return (
    <div className="mini-cart">
      <div className="mini-cart-header">
        <h4>Корзина</h4>
        <span>{items.length} товар</span>
        <button onClick={onClose}>✕</button>
      </div>

      {items.length === 0 && <p>Корзина пуста</p>}

      {items.map((item) => (
        <div className="mini-cart-item" key={item.id}>
          <div className="info">
            <p>{item.name}</p>
            <span>{item.price}c за шт.</span>
            <div className="qty">
              <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>
          </div>
          <span className="item-total">{item.price * item.quantity}c</span>
          <button
            className="remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            ✕
          </button>
        </div>
      ))}

      <div className="mini-cart-footer">
        <div className="total">
          <span>Итого:</span>
          <strong>{total}c</strong>
        </div>

        {!checkout && items.length > 0 && (
          <button className="checkout-btn" onClick={() => setCheckout(true)}>
            Оформить заказ
          </button>
        )}

        {checkout && (
          <div className="checkout-form">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={submitOrder}>Отправить заказ</button>
          </div>
        )}

        {items.length > 0 && !checkout && !payWithPayPal && (
          <>
            <button className="paypal-btn" onClick={() => setPayWithPayPal(true)}>
              Оплатить через PayPal
            </button>
            <button className="card-btn">Дебетовая или кредитная карта</button>
          </>
        )}

        {payWithPayPal && (
          <PayPalScriptProvider
            options={{ "client-id": "ТВОЙ_PAYPAL_CLIENT_ID", currency: "RUB" }}
          >
            <PayPalButtons
              style={{ layout: "vertical", color: "gold", shape: "rect" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: total.toString() },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                await actions.order.capture();
                submitOrder(); 
                alert("Оплата прошла успешно!");
              }}
            />
          </PayPalScriptProvider>
        )}
      </div>
    </div>
  );
}

