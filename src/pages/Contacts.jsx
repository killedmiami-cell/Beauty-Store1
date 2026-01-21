import "./Сontacts.css";

export default function Contacts() {
  return (
    <section className="contacts-page">
      
      <div className="contacts-hero">
        <h1>Контакты</h1>
        <p>
          Мы всегда рады общению и готовы помочь вам с выбором идеального ухода
        </p>
      </div>

      
      <div className="contacts-content">
        
        <div className="contacts-info">
          <h2>Свяжитесь с нами</h2>

          <p>
            📍 <strong>Адрес:</strong> Кыргызстан, г. Бишкек
          </p>
          <p>
            📞 <strong>Телефон:</strong> +996 700 123 456
          </p>
          <p>
            ✉ <strong>Email:</strong> info@luxecosmetics.com
          </p>

          <div className="contacts-hours">
            <h3>Часы работы</h3>
            <p>Пн – Пт: 10:00 – 19:00</p>
            <p>Сб – Вс: 11:00 – 17:00</p>
          </div>
        </div>

        
        <form className="contacts-form">
          <h2>Напишите нам</h2>

          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Ваше сообщение"></textarea>

          <button type="submit">Отправить сообщение</button>
        </form>
      </div>
    </section>
  );
}
