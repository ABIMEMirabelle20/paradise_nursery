import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { name, price, color, category, quantity }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price, color, category } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, price, color, category, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.name !== action.payload);
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  CartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

export default CartSlice.reducer;
