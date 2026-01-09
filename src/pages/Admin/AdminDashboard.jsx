// import { useSelector } from "react-redux";

// export default function AdminDashboard() {
//   const orders = useSelector((state) => state.orders.list);
//   const users = useSelector((state) => state.users.list);

//   return (
//     <div className="admin" style={{ paddingTop: 100 }}>
//       <h1>👑 VIP Admin Panel</h1>

      
//       <ul className="admin-menu">
//         <li>📦 Orders</li>
//         <li>👤 Users</li>
//         <li>🧴 Products</li>
//       </ul>

      
//       <h2>📦 Заказы</h2>
//       {orders.length === 0 && <p>Заказов пока нет</p>}

//       {orders.map((order, index) => (
//         <div key={index} className="admin-order">
//           <p><b>Дата:</b> {order.date}</p>
//           <p><b>Сумма:</b> {order.total} $</p>

//           {order.items.map((item) => (
//             <p key={item.id}>
//               {item.name} × {item.quantity}
//             </p>
//           ))}
//           <hr />
//         </div>
//       ))}

      
//       <h2>👤 Пользователи</h2>
//       {users.length === 0 && <p>Пользователей пока нет</p>}

//       {users.map((user, index) => (
//         <div key={index} className="admin-user">
//           <p>Имя: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <p>Телефон: {user.phone}</p>
//           <p>Дата: {user.date}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN_LOGIN = "admin";
  const ADMIN_PASSWORD = "12345";

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Неверный логин или пароль");
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  // Сохраняем состояние isAuth в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("isAuth", isAuth.toString());
  }, [isAuth]);

  if (!isAuth) {
    return (
      <div style={{ marginTop: 100, textAlign: "center" }}>
        <h2>🔐 Админ панельге кирүү</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Кирүү</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 100, textAlign: "center" }}>
      <h1>👑 ADMIN PANEL</h1>
      <p>Админ панелге ийгиликтүү кирдиң</p>
      <button onClick={handleLogout}>Чыгуу</button>
    </div>
  );
}
