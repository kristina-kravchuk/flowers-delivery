import { configureStore } from '@reduxjs/toolkit';
import flowers from'./FlowersSlice'
import cart from './CartSlice'

export const store = configureStore({
    reducer: {
        flowers, cart
    },
  })