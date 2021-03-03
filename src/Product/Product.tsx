import React from "react";
import { useDispatch } from "react-redux";
import { addProductRequest } from "../redux/action";
import "./Product.css";

interface Bookdataa {
  id: number | any ;
  title: string;
  price: number;
  image: string;
  amount?: number | any ;
}
export default function Product({ id, title, price, image }: Bookdataa) {
  const dispatch = useDispatch();

  function handleAdd(id: Bookdataa) {
    dispatch(addProductRequest(id));
  }
  return (
    <div className="product">
      <div className="product-info" key={id}>
        <p className="title-product">{title}</p>
        <p className="price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt={title} />
      <button onClick={() => handleAdd(id)}>Adicionar no carrinho</button>
    </div>
  );
}
