import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // cart items array; each item includes: name, image, cost, quantity, etc.
   
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = amount;
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in store configuration
export default CartSlice.reducer;
