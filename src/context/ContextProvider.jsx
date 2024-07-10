import { createContext, useReducer } from "react";

export const ProductContext = createContext(null);

const initialState = [];
const Cart = [];

const cartRed=(state, action)=>{
  if(action.type === "addToCart"){
    const check = state.findIndex((e)=> e.id === action.payload.id)
    if(check === -1){
      return [...state, {...action.payload, QTY: 1}]
    }else{
      alert("Item already added");
      return state
    }
    
  }else if(action.type === "increase"){
    return state.map((e)=>{
      if(e.id === action.payload.id){
        e.QTY++
        return e
      }else{
        return e
      }
    })
  }else if(action.type === "decrease"){
    if(action.payload.QTY === 1){
      return state.filter((e)=> e.id !== action.payload.id)
    }else{
      return state.map((e)=>{
        if(e.id === action.payload.id){
          e.QTY--
          return e
        }else{
          return e
        }
      })
    }
    
  }
  
  else{
    alert("error")
  }
}

const reducer=(state, action)=>{
  if(action.type === "addProduct"){
      return [...state, {...action.payload, id: state.length }];
  }else{
    throw new Error()
  }
}

const ContextProvider =({children})=>{
    const [products, dispatch] = useReducer(reducer, initialState);
    const [cart, cartDispatch] = useReducer(cartRed, Cart);
    return(
        <ProductContext.Provider value={{products: products, dispatch: dispatch, cart,  cartDispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ContextProvider;