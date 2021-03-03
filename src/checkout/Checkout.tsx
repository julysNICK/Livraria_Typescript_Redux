import React from "react";
import { useSelector } from "react-redux";
import Productcheckout from "../Productcheckout/Productcheckout";
interface Product {
  id?: number;
  title: string;
  price: number;
  image: string;
  amount?: number | any;
}

interface Bookdata {
  product: Product[];
}

interface RootState {
  [x: string]: any;
  state: Bookdata[];
}
function Checkout() {
  const books = useSelector((state: RootState) => state.product);
  console.log(books);
  return (
    <div className="checkout">
      <div className="section-product">
        {books.map((book: Product) => (
          <Productcheckout
            id={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
