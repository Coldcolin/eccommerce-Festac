import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import cartReducer from "../features/cart/CartSlice"
// import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, 
//   {
//   reducer: {
//     user: authReducer,
//     cart: cartReducer,
//   },
// }
authReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
})

export const persistor = persistStore(store)