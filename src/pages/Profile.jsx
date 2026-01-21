import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Profile.css'
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email && password.length >= 6) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-icon">
          👤
        </div>

        <h2>Вход</h2>
        <p className="subtitle">Войдите в свой аккаунт</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Пароль</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Скрыть" : "Показать"}
          </span>
        </div>

        <small>
          Минимум 6 символов. Лучше используйте буквы и цифры.
        </small>

        <button type="submit">Войти</button>

        <p className="register-link">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  );
};

export default Profile;
