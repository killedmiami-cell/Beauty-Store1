import { Link } from "react-router-dom";
import "./Home.css";
import background from "../images/background.jpg"
import lux1 from "../images/lux1.png"
 export default function Home() {
  const brands = [
    { name: "Dior", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cGnvHgFJ_Cg5PIfY9DuvGCIf6i9XBzhpmA&s" },
    { name: "Chanel", img: "https://www.shutterstock.com/image-vector/chanel-icon-logo-symbol-sign-600nw-2404629953.jpg" },
    { name: "Lancôme", img: "https://aura-cosmetics.kg/wp-content/uploads/2020/10/Lancome_logo.jpg" },
    { name: "Clinique", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsp2cz17KHkFtdA70G1gGuSaXpi5wPDo1ww&s" }
  ];

  return (
    <div className="home-page">
      <section className="lux-home" 
      style={{backgroundImage: `url(${background})`}} >

  
  <div className="video-overlay"></div>
  
  <div className="lux-content">
    <span className="lux-brand">LUXE COSMETICS</span>
    <h1 className="lux-title">Beauty is Power</h1>
    <p className="lux-text">Premium skincare & makeup inspired by haute couture</p>
    <Link to="/catalog" className="lux-explore-btn">Explore Collection</Link>
  </div>
</section>

      
      <section className="lux-section history-section"  style={{lux1Image: `url(${lux1})`}}>
        <div className="lux-container">
          <div className="history-wrapper">
            <h2 className="lux-catalog-title">История красоты</h2>
            <p className="history-p">
              Косметика — это не просто средства, это искусство подчеркивать вашу 
              уникальность. Мы верим, что забота о коже должна быть простой, 
              понятной и приносить удовольствие. Наша миссия — предоставить вам 
              доступ к лучшим мировым формулам для здоровья и сияния.
            </p>
          </div>
        </div>
      </section>

      
      <section className="lux-section">
        <div className="lux-container">
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
            
      </section>

      
      <section className="lux-section">
        <div className="lux-container">
          <h2 className="lux-catalog-title" style={{marginBottom: '30px'}}>Где нас найти</h2>
          <div className="map-wrapper">
            <iframe 
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.8746%2C%22lon%22%3A74.5997%2C%22zoom%22%3A16%7D%2C%22city%22%3A%22bishkek%22%2C%22firms%22%3A%5B%5D%7D" 
              width="100%" height="400" frameBorder="0">
            </iframe>
          </div>
        </div>
      </section>

      
      <footer className="lux-footer">
        <div className="footer-country">
          Shop in: <span className="gold-text">United States</span> | <span>Change Country</span>
        </div>
        <div className="footer-copyright">
          Copyright © 2025 LUXE COSMETICS
        </div>
      </footer>
    </div>
  );
}