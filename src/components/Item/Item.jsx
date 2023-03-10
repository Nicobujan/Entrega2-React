import React from "react";

import "./item.css";

import { ButtonChild } from "../Boton/Boton";
import ToggleButton from "../toggleButton/ToggleButton";
import { Link } from "react-router-dom";

function Item({ id, title, price, detail, imgurl }) {
  const urlDetail = `/item/${id}`;

  return (
    
      <div className="item-card">
        <ToggleButton icon="♥" />
        <div className="item-card_header">
          <h2 className="nombreProd">{title}</h2>
        </div>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>

        <div className="item-card_detail">
          <h4 className="precio">$ {price}</h4>
          <small className="detalle">{detail}</small>
        </div>
        <Link to={urlDetail}>
        <ButtonChild>Ver detalle</ButtonChild>
        </Link>
      </div>
    
  );
}

export default Item;