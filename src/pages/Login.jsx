import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email }));

    
    if (email === "admin@vip.com") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>LUXE COSMETICS</h1>
        <p>Admin Access</p>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-hint">
          admin@vip.com — вход в админку
        </p>
      </div>
    </div>
  );
}

