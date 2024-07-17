import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            users: [],
            isLoggedIn: false
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
            }
          }
    }
);

export const { signUpUser, loginUser, logOut} = authSlice.actions;
export default authSlice.reducer