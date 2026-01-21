import "./ReviewItem.css";

export default function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <img className="avatar" src={review.avatar} alt={review.name} />

      <div className="review-content">
        <div className="review-header">
          <div>
            <strong>{review.name}</strong>
            <span className="email">{review.email}</span>
          </div>
          <span className="date">{review.date}</span>
        </div>

        <div className="rating">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>

        <p className="text">{review.text}</p>

        <div className="actions">
          <button>👍 0</button>
          <button>👎 0</button>
          <button className="reply">Ответить</button>
        </div>
      </div>
    </div>
  );
}