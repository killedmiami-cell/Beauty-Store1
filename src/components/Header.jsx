import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MiniCart from "./MiniCart";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const items = useSelector(state => state.cart.items);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="lux-header">
        <Link to="/" className="lux-logo">
          LUXE COSMETICS
        </Link>

        <nav className="desktop-nav">
          <NavLink to="/" onClick={closeMenu}>Главный</NavLink>
          <NavLink to="/about" onClick={closeMenu}>О нас</NavLink>
          <NavLink to="/skincare" onClick={closeMenu}>Уход за кожей</NavLink>
          <NavLink to="/catalog" onClick={closeMenu}>Каталог</NavLink>
          <NavLink to="/profile" onClick={closeMenu}>Личный кабинет</NavLink>
          <NavLink to="/contacts" onClick={closeMenu}>Контакты</NavLink>
        </nav>

        {/* ИКОНКА КОРЗИНЫ */}
        <button className="cart-btn" onClick={() => setOpenCart(true)}>
          🛒
          {items.length > 0 && (
            <span className="cart-count">{items.length}</span>
          )}
        </button>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {open && (
          <nav className="burger-menu">
            <NavLink to="/" onClick={closeMenu}>Главный</NavLink>
            <NavLink to="/about" onClick={closeMenu}>О нас</NavLink>
            <NavLink to="/skincare" onClick={closeMenu}>Уход за кожей</NavLink>
            <NavLink to="/catalog" onClick={closeMenu}>Каталог</NavLink>
            <NavLink to="/contacts" onClick={closeMenu}>Контакты</NavLink>
          </nav>
        )}
      </header>

      {/* MINI CART */}
      <MiniCart open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
