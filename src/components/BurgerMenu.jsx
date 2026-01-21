import { Link } from "react-router-dom";

export default function BurgerMenu({ close }) {
  return (
    <div className="burger-menu">
      <Link to="/" onClick={close}>Home</Link>
      <Link to="/catalog" onClick={close}>Catalog</Link>
      <Link to="/skincare" onClick={close}>Skin Care</Link>
      <Link to="/about" onClick={close}>About</Link>
      <Link to="/contacts" onClick={close}>Contacts</Link>
      <Link to="/treatment" onClick={close}>Treatment</Link>
      <Link to="/reviews" onClick={close}>ReviewsPage</Link>
    </div>
  );
}
