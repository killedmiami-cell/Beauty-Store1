import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const orders = useSelector((state) => state.orders.list);
  const users = useSelector((state) => state.users.list);

  return (
    <div className="admin" style={{ paddingTop: 100 }}>
      <h1>👑 VIP Admin Panel</h1>

      
      <ul className="admin-menu">
        <li>📦 Orders</li>
        <li>👤 Users</li>
        <li>🧴 Products</li>
      </ul>

      
      <h2>📦 Заказы</h2>
      {orders.length === 0 && <p>Заказов пока нет</p>}

      {orders.map((order, index) => (
        <div key={index} className="admin-order">
          <p><b>Дата:</b> {order.date}</p>
          <p><b>Сумма:</b> {order.total} $</p>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity}
            </p>
          ))}
          <hr />
        </div>
      ))}

      
      <h2>👤 Пользователи</h2>
      {users.length === 0 && <p>Пользователей пока нет</p>}

      {users.map((user, index) => (
        <div key={index} className="admin-user">
          <p>Имя: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Телефон: {user.phone}</p>
          <p>Дата: {user.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}







