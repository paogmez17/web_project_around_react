export default function NewCard({ onClose }) {
  return (
    <div className="popup__container">
      <form
        className="popup__form"
        name="card-form"
        id="new-card-form"
        noValidate
      >
        <input
          className="popup__input"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>

        <input
          className="popup__input"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>

        <button className="popup__submit-button" type="submit" id="save">
          Guardar
        </button>
      </form>
    </div>
  );
}
