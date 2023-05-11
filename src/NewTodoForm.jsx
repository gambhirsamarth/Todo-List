import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      {" "}
      <h1 className="title">
        To Do List
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h1>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <input
            type="text"
            name="item"
            className="input__control"
            id="item"
            required
            autoComplete="off"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <label htmlFor="item">
            <span>Add Todo</span>
          </label>

          <div className="content"></div>
        
        <button className="btn">
        <i className="fa-solid fa-plus"></i>
        </button>
        </div>
      </form>
    </>
  );
}
