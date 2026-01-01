import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";

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
    <div style={{ paddingTop: 100 }}>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          placeholder="Имя"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

