import Popup from "../Main/components/Popup/Popup";

export default function ImagePopup({ card, onClose }) {
  if (!card) return null; // nada abierto

  const { name, link } = card;

  return (
    <Popup onClose={onClose} /* sin title */>
      <figure className="popup__figure">
        <img className="popup__image" src={link} alt={name} />
        <figcaption className="popup__caption">{name}</figcaption>
      </figure>
    </Popup>
  );
}
