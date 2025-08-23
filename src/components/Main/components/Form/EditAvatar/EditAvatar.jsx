export default function EditAvatar() {
  return (
    <div className="popup__container">
      <form
        className="popup__form"
        name="avatar-form"
        style={{
          alignContent: "center",
        }}
      >
        <input
          type="url"
          name="avatar"
          className="popup__input"
          placeholder="Enlace de la imagen"
          required
          style={{
            alignContent: "center",
          }}
        />
        <button type="submit" className="popup__submit-button">
          Guardar
        </button>
      </form>
    </div>
  );
}
