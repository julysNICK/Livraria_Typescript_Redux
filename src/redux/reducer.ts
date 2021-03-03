
interface Bookdata{
  id?: any;
  price:number;
}

interface BookArray{
  book:Bookdata[]
  id:number
 amount?: number | any ;
}

interface actionprops{
  book:string
  type:string
  id:number
 amount?: number | any ;
}
export default function reserve(state = [], action:actionprops) {
  console.log(state);
  switch (action.type) {
    case "ADD_PRODUCT_SUCESS":
      return [...state, action.book];
    case "REMOVE_PRODUCT":
      const serachProduct = state.findIndex((book:BookArray) => book.id === action.id);
      let newBasket = [...state];
      if (serachProduct >= 0) {
        newBasket.splice(serachProduct, 1);
      } else {
        console.warn(`${action.id}`);
      }
      return newBasket;
    case "ADD_AMOUNT_SUCESS":
      const index = state.findIndex((book:BookArray) => book.id === action.id);
      let arraValue:Array<BookArray> = [...state];
      if (index>=0) {
        arraValue[index].amount = Number(action.amount)
      }
      return [...state]
    default:
      return state;
  }
}
