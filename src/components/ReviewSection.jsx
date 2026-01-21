import { useState } from "react";
import ReviewItem from "./ReviewItem";
import "./ReviewSection.css";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const submitReview = (e) => {
    e.preventDefault();

    if (!rating || !text) return alert("Заполните отзыв и оценку");

    const newReview = {
      id: Date.now(),
      name: "....",
      email: "......",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating,
      text,
      date: new Date().toLocaleDateString("ru-RU"),
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setText("");
  };

  return (
    <section className="reviews-section">
      {/* ФОРМА */}
      <form className="review-form" onSubmit={submitReview}>
        <h3>Поделитесь впечатлениями</h3>

        <label>Ваша оценка</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={n <= rating ? "star active" : "star"}
              onClick={() => setRating(n)}
            >
              ★
            </span>
          ))}
        </div>

        <label>Ваш отзыв</label>
        <textarea
          placeholder="Напишите отзыв..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Опубликовать отзыв</button>
      </form>

      {/* СПИСОК */}
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </section>
  );
}