import { useState } from "react";
import "./ReviewsPage.css";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!name || !email || !comment || rating === 0) {
      alert("Пожалуйста, заполните все поля и выберите оценку");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      email,
      avatar: `https://i.pravatar.cc/50?u=${email}`, 
      comment,
      rating,
      date: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      replies: [],
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setEmail("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="reviews-page">
      <h2>Отзывы клиентов</h2>

      <div className="review-form">
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="rating">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={s <= rating ? "star filled" : "star"}
              onClick={() => setRating(s)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Ваш отзыв"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={handleSubmit}>Опубликовать отзыв</button>
      </div>

      <div className="reviews-list">
        {reviews.length === 0 && <p>Пока нет отзывов</p>}
        {reviews.map((r) => (
          <div key={r.id} className="review-item">
            <div className="review-header">
              <img src={r.avatar} alt={r.name} className="avatar" />
              <div>
                <strong>{r.name}</strong>
                <div className="email">{r.email}</div>
                <div className="date">{r.date}</div>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={s <= r.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="comment">{r.comment}</p>

            {r.replies && r.replies.length > 0 && (
              <div className="replies">
                {r.replies.map((rep) => (
                  <div key={rep.id} className="reply">
                    <span className="reply-date">{rep.date}</span>
                    <p>{rep.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}