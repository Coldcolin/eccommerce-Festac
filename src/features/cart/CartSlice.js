import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: [],
          reducers:{
            addToCart:(state, action)=>{
                const check = state.findIndex((e)=> e.id === action.payload.id)
                // if(check === -1){
                const newState = [...state, {...action.payload, QTY: 1}];
                state = newState;
                // }else{
                // alert("Item already added");
                // }
            },
            increaseQuantity:(state, action)=>{
                const newState = state.map((e)=>{
                    if(e.id === action.payload.id){
                      e.QTY++
                      return e
                    }else{
                      return e
                    }
                  });
                  state = newState
            },
            decreaseQuantity:(state, action)=>{
                if(action.payload.QTY === 1){
                    state = state.filter((e)=> e.id !== action.payload.id)
                  }else{
                    state = state.map((e)=>{
                      if(e.id === action.payload.id){
                        e.QTY--
                        return e
                      }else{
                        return e
                      }
                })
            }
          },
          deleteItem:(state, action)=>{
            const id = action.payload;
            state = state.filter((e)=> e.id !== id)
          },
          clearCart: (state, action)=>{
            state = []
          }
        }
    }
);

export const {addToCart, increaseQuantity, decreaseQuantity, deleteItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer