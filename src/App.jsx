import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";
import EditProfile from "./components/Main/components/Form/EditProfile/EditProfile";
import EditAvatar from "./components/Main/components/Form/EditAvatar/EditAvatar";
import NewCard from "./components/Main/components/Form/NewCard/NewCard";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  // Cargar usuario
  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
    api.getInitialCards().then(setCards).catch(console.error);
  }, []);

  // Actualizar usuario
  const handleUpdateUser = (data) => {
    api
      .editUserInfo(data)
      .then(setCurrentUser)
      .then(() => setPopup(null))
      .catch(console.error);
  };

  // Actualizar avatar
  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data.avatar)
      .then(setCurrentUser)
      .then(() => setPopup(null))
      .catch(console.error);
  };

  // Controladores de tarjetas
  const handleAddPlaceSubmit = (newCard) => {
    setCards([newCard, ...cards]);
  };
  const handleCardLike = (cardToLike) => {
    setCards(
      cards.map((c) =>
        c._id === cardToLike._id ? { ...c, isLiked: !c.isLiked } : c
      )
    );
  };
  const handleCardDelete = (cardToDelete) => {
    setCards(cards.filter((c) => c._id !== cardToDelete._id));
  };

  // Definir popups
  const popups = {
    editProfilePopup: { title: "Edit profile", children: <EditProfile /> },
    editAvatarPopup: { title: "Edit avatar", children: <EditAvatar /> },
    newCardPopup: {
      title: "New place",
      children: <NewCard onAddPlace={handleAddPlaceSubmit} />,
    },
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onOpenPopup={setPopup}
          onClosePopup={() => setPopup(null)}
          popup={popup}
          popups={popups}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
