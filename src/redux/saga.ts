import { call, put, all, takeLatest, select } from "redux-saga/effects";
import {
  addProductSucess,
  addAmountSucess,
  ADD_PRODUCT_REQUEST,
} from "./action";

import api from "../service/api";
interface Bookdata {
  id?: number ;
  price: number;
  amount?: number | any ;
}

interface BookArray {
  book: Bookdata[];
  id: number;
  ADD_PRODUCT_REQUEST:string
}


function* addProduct({ id }: Bookdata) {
  const bookexist =  select((state:any) =>
    state.product.find((book: BookArray) => book.id === id)
  );
  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  const currentamount = bookexist ? bookexist.amount : 0;
  const amount = currentamount + 1;
  if (amount > stockAmount) {
    alert("limite atigindo");
    return;
  }
  yield put(addAmountSucess(id as any, amount));
  const response = yield call(api.get, `books/${id}`);
  const data = {
    ...response.data,
    amount: 1,
  };
  yield put(addProductSucess(data));
  yield put(addAmountSucess(id as any, amount));
}

export default all([takeLatest(ADD_PRODUCT_REQUEST as string, addProduct as any)]);
