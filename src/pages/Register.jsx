import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";
import "./Register.css";
import buy from "../images/buy.png"
export default function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        ...form,
        date: new Date().toLocaleString(),
      })
    );

    alert("Регистрация успешна");
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="mii">
      <section className="auth-page" 
      style={{backgroundImage: `url(${buy})`}}>
        
    <div className="auth-page">
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="Имя"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="tel"
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
    </section>
    </div>
  );
}
