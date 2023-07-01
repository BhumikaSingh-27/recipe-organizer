import React from "react";
import "./Modal.css";

const Modal = () => {
  console.log("hello");
  return (
    <div>
      <div className="modal-container">
        <h2>Add new</h2>
        <label htmlFor="name">Name of Cuisine</label>
        <input type="text" id="name" placeholder="Enter cuisine name" />
        <label htmlFor="">Cuisine</label>
        <input type="text" placeholder="type" />
        <input type="file" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Modal;
