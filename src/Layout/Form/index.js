import React from "react";

function Form({
  formName,
  formNameChange,
  formText,
  formTextChange,
  handleCancel,
  nameDesc,
  textDesc,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder={nameDesc}
          value={formName}
          onChange={formNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="textdescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control mb-1"
          name="description"
          id="textdescription"
          rows="3"
          placeholder={textDesc}
          onChange={formTextChange}
          value={formText}
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary mr-1"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
