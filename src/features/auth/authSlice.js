import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            users: []
          },
          reducers:{
            signUpUser: (state, action)=>{
                state.users.push(action.payload)
            },
            loginUser: (state, action)=>{},
          }
    }
);

export const { signUpUser, loginUser} = authSlice.actions;
export default authSlice.reducer