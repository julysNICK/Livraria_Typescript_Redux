import React from "react";
import { useDispatch } from "react-redux";
import "./Productcheckout.css";
interface checkoutProps {
  id?: number;
  title: string;
  price: number;
  image: string;
}
export default function Productcheckout({ id, title, price, image }:checkoutProps) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch({
      type: "REMOVE_PRODUCT",
      id: id,
    });
  }
  return (
    <div className="product">
      <div className="product-info">
        <p className="title-product">{title}</p>
        <p className="price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt={title} />
      <button onClick={() => handleRemove()}>remover do carrinho</button>
    </div>
  );
}
