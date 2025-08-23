import editButton from "../../images/editbutton.png";
import addButton from "../../images/addbutton.png";
import profilePicture from "../../images/Paola.jpg";
import { useState } from "react";
import Popup from "../Main/components/Popup/Popup";
import NewCard from "../Main/components/Form/NewCard/NewCard";
import EditProfile from "../Main/components/Form/EditProfile/EditProfile";
import EditAvatar from "../Main/components/Form/EditAvatar/EditAvatar";
import Card from "../Main/components/Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "New place", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);

  function handleOpenPopup(popupData) {
    console.log("Abriendo popup:", popupData);
    setPopup(popupData);
  }
  function handleClosePopup() {
    setPopup(null); // cerrar popup
  }

  function handleCardClick(card) {
    setSelectedCard(card); // abre la imagen
  }

  return (
    <main>
      {/* Sección de perfil */}
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-area">
            <img
              className="profile__picture"
              src={profilePicture}
              alt="imagen perfil"
            />
            <button
              type="button"
              className="profile__avatar-edit-button"
              aria-label="Editar avatar"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            >
              <img src={editButton} alt="Editar avatar" />
            </button>
          </div>

          <div className="profile__info">
            <div className="profile__edit">
              <h2 className="profile__info-name">Paola Gomez</h2>
              <button
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img alt="edit button" src={editButton} />
              </button>
            </div>
            <h3 className="profile__info-career">Web Developer</h3>
          </div>

          <div className="profile__add">
            <button
              aria-label="Add card"
              className="profile__add-button"
              type="button"
              onClick={() => handleOpenPopup(newCardPopup)}
            >
              <img
                src={addButton}
                alt="add button"
                className="profile__add-vector"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Sección de tarjetas */}
      <section className="elements" id="elements">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleCardClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup
          card={selectedCard}
          onClose={handleClosePopup}
          isOpen={!!selectedCard}
        />
      )}
    </main>
  );
}
