import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MiniCart from "./MiniCart";
import "./Header.css"
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
          <NavLink to="/treatment" onClick={closeMenu}>Лечение</NavLink>
          <NavLink to="/favorites" onClick={closeMenu}>Избранное</NavLink>
          <NavLink to="/reviews" onClick={closeMenu}>Отзывы</NavLink>
          <Link to="/register">Регистрация</Link>
          <NavLink to="/profile" onClick={closeMenu}>Личный кабинет</NavLink>
          <NavLink to="/contacts" onClick={closeMenu}>Контакты</NavLink>
        </nav>

        
        <button className="cart-btn" onClick={() => setOpenCart(true)}>
          🛒
          {/* {items.length > 0 && (
            <span className="cart-count">{items.length}</span>
          )} */}    {items.length > 0 && <span>{items.length}</span>}

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
            <NavLink to="/treatment" onClick={closeMenu}>Лечение</NavLink>
            <NavLink to="/reviews" onClick={closeMenu}>Отзывы</NavLink>
            <NavLink to="/contacts" onClick={closeMenu}>Контакты</NavLink>
            <Link to="/checkout">Регистрация</Link>

          </nav>
        )}
      </header>

      
      <MiniCart open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
