import React, { useContext } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataContext";

const Card = ({ data }) => {
  const { deleteHandler } = useContext(DataContext);
  return (
    <div className="card-container">
      <img src={data.image} alt="" />
      <div className="icons">
        {" "}
        <span>
          <EditIcon />
        </span>{" "}
        <span onClick={() => deleteHandler(data.id)}>
          <DeleteIcon />
        </span>
      </div>
      <h2>{data.name}</h2>
      <div>
        <div>
          <p className="card-content">
            <b>cuisine type:</b> <span>{data.type}</span>
          </p>
          <p className="card-content">
            <b>Ingredients:</b>{" "}
            <span>
              {" "}
              <NavLink to={`/recipe/${data.id}`}>See Recipe </NavLink>{" "}
            </span>
          </p>
          <p className="card-content">
            <b>Instructions:</b>{" "}
            <span>
              <NavLink to={`/recipe/${data.id}`}>See Recipe</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
