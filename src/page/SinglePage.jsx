import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../components/Card/Card.css";

const SinglePage = () => {
  const { rId } = useParams();
  const { recipeData } = useContext(DataContext);

  const data = recipeData.find(({ id }) => id.toString() === rId);
  // console.log(data,"single")

  return (
    <div className="container">
      <h2>{data?.name}</h2>

      <div className="details">
        <img src={data?.image} alt="" />
        <div className="info">
          <h2>Cuisine: {data?.type}</h2>
          <p>
            <b>Ingredients:</b> {data?.ingredients}
          </p>
          <p>
            <b>Instructions:</b>{" "}
            
              {data?.instructions?.map((ele) => (
                <div>{ele}</div>
              ))}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
