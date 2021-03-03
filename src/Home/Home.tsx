import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import api from "../service/api";
interface book{
  id?:number;
  title:string;
  price:number;
  image:string;
}

interface Bookdata{
    book:book[]
    id?:number;
    title:string;
    price:number;
    image:string;
    amount?: number | any ;
}

export default function Home() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    async function loadbook() {
      const response = await api.get("/books");
      setbooks(response.data);
    }
    loadbook();
  }, []);
  return (
    <div className="home">
      <div className="row">
        {books.map((book:Bookdata) => (
          <Product  id={book.id} title={book.title} price={12.0} image={book.image} />
        ))}
      </div>
    </div>
  );
}
