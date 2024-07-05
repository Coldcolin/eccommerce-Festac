import { createContext, useReducer } from "react";

export const ProductContext = createContext(null);

const initialState = [];

const reducer=(state, action)=>{
  if(action.type === "addProduct"){
      return [...state, {...action.payload, id: state.length }];
  }else{
    throw new Error()
  }
}

const ContextProvider =({children})=>{
    const [products, dispatch] = useReducer(reducer, initialState);
    return(
        <ProductContext.Provider value={{products: products, dispatch: dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ContextProvider;