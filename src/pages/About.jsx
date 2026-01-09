import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const brands = [
    { name: "Dior", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUWBLWzvAy_K69ub-ewaYrCncd2q7bdMkxA&s" },
    { name: "Chanel", img: "https://www.sostav.ru/images/news/2018/06/22/preview/32109_st.jpg" },
    { name: "Lancôme", img: "https://a.428.ua/img/1000086/3000/2000/parfyumirovannaya_voda_zhenskaya_lancome_tresor_la_nuit_edp_50_ml~926~753.jpg" },
    { name: "Clinique", img: "https://visagehall.ru/upload/resize_cache/webp/resize_cache/uf/5a5/750_550_0/g32nzwin6nygi2bl9ut47u0ou933dosn.webp" }
  ];

  const reviews = [
    { name: "Анна", text: "Лучший сервис и только оригинальная продукция. Очень довольна покупкой!" },
    { name: "Мария", text: "Прекрасный выбор брендов. Доставка в Бишкеке очень быстрая." },
    { name: "Елена", text: "Качество косметики на высоте. Теперь заказываю только здесь." }
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <h1 className="lux-catalog-title">Luxury О нас</h1>
        <p className="lux-catalog-subtitle">
          Мы продаём качественную косметику от известных мировых брендов, заботясь о вашей коже.
        </p>
      </div>

      <div className="about-values">
        <div className="value-card">
          <span className="value-icon">🌿</span>
          <h3>Натуральные ингредиенты</h3>
          <p>Только проверенные и безопасные компоненты</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🧪</span>
          <h3>Современные формулы</h3>
          <p>Разработано с участием специалистов</p>
        </div>
        <div className="value-card">
          <span className="value-icon">🐰</span>
          <h3>Без тестов на животных</h3>
          <p>Этичное производство</p>
        </div>
        <div className="value-card">
          <span className="value-icon">♻</span>
          <h3>Экологичная упаковка</h3>
          <p>Забота о природе</p>
        </div>
      </div>

      <div className="brands-section">
        <h2 className="lux-catalog-title">Бренды, которые мы продаём</h2>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.img} alt={brand.name} />
              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="lux-catalog-title">Отзывы клиентов</h2>
        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <p>"{rev.text}"</p>
              <h4>— {rev.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <h2 className="lux-catalog-title">Готовы к преображению?</h2>
        <Link to="/catalog" className="about-btn">Перейти в каталог</Link>
      </div>
    </section>
  );
}