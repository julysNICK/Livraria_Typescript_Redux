
  interface Bookdata{
    id?: Number | null;
    price:number;
    amount?: number | any ;
  }

  interface BookArray{
    book:Bookdata[]
  }
  export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST"
  export const ADD_PRODUCT_SUCESS = "ADD_PRODUCT_SUCESS"
  export const ADD_AMOUNT_SUCESS = "ADD_AMOUNT_SUCESS"
export function addProductRequest(id: Bookdata) {
  return {
    type: ADD_PRODUCT_REQUEST,
    id,
  };
}
export function addProductSucess(book: BookArray) {
  return {
    type: ADD_PRODUCT_SUCESS,
    book,
  };
}

export function addAmountSucess(id:Bookdata, amount:Bookdata) {
  return {
    type: ADD_AMOUNT_SUCESS,
    id,
    amount,
  };
}
