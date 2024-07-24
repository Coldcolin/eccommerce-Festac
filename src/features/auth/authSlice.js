import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            users: [],
            isLoggedIn: false,
            cart: []
          },
          reducers:{
            signUpUser: (state, action)=>{
                state.users.push(action.payload)
            },
            loginUser: (state, action)=>{
              //find the user using the email
              //use the filter method to get an array of the user with the found email
              const user = state.users.filter((e)=> e.email === action.payload.email);
              if(user.length === 0){
                //if user.length is 0, it means that there is no user with that email
                alert("user not found: check email")
              }else{
                //use the password property of the object in the user array to compare with the given password
                const checkPassword = user[0].password === action.payload.password;

                if(checkPassword === false){
                  alert("Password incorrect")
                }else{
                  state.isLoggedIn = true;
                }
              }
            },
            logOut: (state, action)=>{
              state.isLoggedIn = false;
            },
            addToCart:(state, action)=>{
              const check = state.cart.findIndex((e)=> e.id === action.payload.id)
              // if(check === -1){
              const newState = [...state.cart, {...action.payload, QTY: 1}];
              state.cart = newState;
              // }else{
              // alert("Item already added");
              // }
          },
          increaseQuantity:(state, action)=>{
              const newState = state.cart.map((e)=>{
                  if(e.id === action.payload.id){
                    e.QTY++
                    return e
                  }else{
                    return e
                  }
                });
                state.cart = newState
          },
          decreaseQuantity:(state, action)=>{
              if(action.payload.QTY === 1){
                state.cart = state.cart.filter((e)=> e.id !== action.payload.id)
                }else{
                  state.cart = state.cart.map((e)=>{
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
          state.cart = state.cart.filter((e)=> e.id !== id)
        },
        clearCart: (state, action)=>{
          state.cart = []
        }
          }
    }
);

export const { signUpUser, loginUser, logOut, addToCart, increaseQuantity, decreaseQuantity, deleteItem, clearCart} = authSlice.actions;
export default authSlice.reducer