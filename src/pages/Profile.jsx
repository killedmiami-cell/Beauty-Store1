import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="lux-auth-section">
      <div className="lux-auth-card">
        <div className="lux-auth-header">
          <h2 className="lux-catalog-title">Вход в кабинет</h2>
          <p className="lux-catalog-subtitle">Добро пожаловать в мир Luxe Cosmetics</p>
        </div>

        <form className="lux-form">
          <div className="lux-input-group">
            <label>Ваш Email</label>
            <input type="email" placeholder="example@mail.com" className="lux-input" />
          </div>

          <div className="lux-input-group">
            <label>Пароль</label>
            <div className="lux-password-box">
              <input type="password" placeholder="••••••••" className="lux-input" />
              <button type="button" className="lux-show-pass">Показать</button>
            </div>
          </div>

          <button type="submit" className="lux-auth-btn">Войти в аккаунт</button>
        </form>

        <div className="lux-auth-footer">
          <span>Впервые у нас?</span>
          <button className="lux-link-btn">Создать профиль</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;