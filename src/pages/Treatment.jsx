import "./Treatment.css";

export default function Treatment() {
  return (
    <>
      <section className="treatment-page">
        <div className="treatment-hero">
          <h1>Лечение кожи</h1>
          <p>
            Профессиональный уход и эффективные решения для здоровья вашей кожи
          </p>
        </div>

        <div className="treatment-content">
          <div className="treatment-card">
            <h3>Акне</h3>
            <p>Средства для очищения, восстановления и защиты кожи</p>
          </div>

          <div className="treatment-card">
            <h3>Пигментация</h3>
            <p>Выравнивание тона и осветление кожи</p>
          </div>

          <div className="treatment-card">
            <h3>Чувствительная кожа</h3>
            <p>Успокаивающий и безопасный уход</p>
          </div>

          <div className="treatment-card">
            <h3>Антивозрастной уход</h3>
            <p>Восстановление упругости и сияния кожи</p>
          </div>

          <div className="treatment-card">
            <h3>Розацеа</h3>
            <p>Покраснение, сосуды, иногда прыщи. Обычно на щеках и носу.</p>
           </div>

          <div className="treatment-card">
            <h3>Витилиго</h3>
            <p>Белые пятна — отсутствие пигмента.</p>
           </div>

          <div className="treatment-card">
            <h3>Герпес</h3>
            <p>Маленькие болезненные пузырьки, чаще на губах.</p>
           </div>

          <div className="treatment-card">
            <h3>Аллергия</h3>
            <p>Отёки, зуд, покраснение.</p>
           </div>

          <div className="treatment-card">
            <h3>Бородавки, папилломы</h3>
            <p>Вызваны вирусом.</p>
           </div>

          <div className="treatment-card">
            <h3>Импетиго</h3>
            <p>Гнойнички с корочками (чаще у детей).</p>
           </div>

          <div className="treatment-card">
            <h3>Мелазма</h3>
            <p>Коричневые пятна, чаще у женщин.</p>
           </div>

          <div className="treatment-card">
            <h3>Купероз</h3>
            <p>Видимые сосуды на лице.</p>
           </div>
        </div>    
      </section>

      
      <footer className="lux-footer">
        <div className="footer-country">
          Shop in: <span className="gold-text">United States</span> |{" "}
          <span>Change Country</span>
        </div>

        <div className="footer-copyright">
          Copyright © 2025 LUXE COSMETICS
        </div>
      </footer>
    </>
  );
}

