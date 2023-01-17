import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../Datos/Datos.jsx";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './itemlistcontainer.css';



function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let {categoryid} = useParams();

    useEffect(() => {
      if (categoryid) {
        getItemsByCategory(categoryid).then((response) => {
          setProducts(response);
        });
      } else {
        getItems().then((response) => {
          setProducts(response);
        });
      }
    }, [categoryid]);
  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;