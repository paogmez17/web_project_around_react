import Trash from "../../../../images/Trash.svg";
import Heart from "../../../../images/group.png";

export default function Card({ card, onCardClick }) {
  const { name, link, isLiked } = card; // solo desestructuramos lo que está en card

  return (
    <div className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)} // ahora sí funciona
        style={{ cursor: "pointer" }}
      />
      <button
        className="card__delete-button"
        type="button"
        aria-label="Delete card"
        style={{ backgroundImage: `url(${Trash})` }}
      ></button>
      <h2 className="card__title">{name}</h2>
      <button
        aria-label="Like card"
        type="button"
        className={`card__like-button ${
          isLiked ? "card__like-button--active" : ""
        }`}
        style={{ backgroundImage: `url(${Heart})` }}
      ></button>
    </div>
  );
}
