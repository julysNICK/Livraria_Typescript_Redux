import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


interface Product{
  id?:number;
  title:string;
  price:number;
  image:string;
  amount?: number | any ;
}

interface Bookdata{
    product:Product[]
}

interface RootState {
  [x: string]: string | number | any;
  state:Bookdata[]
}
interface nuumber {
  bookprice:number[]
  reduce:any
  total:number;
  book:number[]
  price:number;
}
export default function Header() {
  const sizeArraybooks = useSelector((state:RootState) => state.product.length);
  const Arraybooks = useSelector((state:RootState) => state.product);
  console.log(sizeArraybooks);
  function somarpreco(bookprice:nuumber) {
    return bookprice.reduce((total:number,book:nuumber)=> total + book.price,0)
  }
  console.log(somarpreco(Arraybooks))
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2169/2169836.svg"
            alt="supemarket"
          />
          <p>Biblioteca Reactjs</p>
        </div>
      </Link>

      <div className="header-basket">
        <Link to="/checkout">
          <h1>
            Produto(s) adicionado: {Arraybooks.length}/total em reais:R${somarpreco(Arraybooks)},00
          </h1>
        </Link>
      </div>
    </div>
  );
}
