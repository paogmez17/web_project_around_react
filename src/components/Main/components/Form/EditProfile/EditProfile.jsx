export default function EditProfile() {
  return (
    <form className="popup__form" id="FormProfile">
      <input
        type="text"
        placeholder="Nombre"
        className="popup__input popup__input--name"
        id="inputname"
        name="name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input_type_error" id="inputname-error"></span>

      <input
        type="text"
        placeholder="Acerca de mí"
        className="popup__input popup__input--about"
        id="inputprofesion"
        name="about"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="popup__input_type_error"
        id="inputprofesion-error"
      ></span>

      <button className="popup__submit-button" type="submit" id="save">
        Guardar
      </button>
    </form>
  );
}
