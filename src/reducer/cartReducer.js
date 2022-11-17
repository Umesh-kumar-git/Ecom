import { createReducer } from "@reduxjs/toolkit";

const inisitialState = [

]






  


// JSON.parse(localStorage.getItem('items'))



export const cartReducer = createReducer(inisitialState, {
  addcart: (state, action) => {
    const item = action.payload;

    const isItemExist = state.find((i) => i.id === item.id);

    if (isItemExist) {
      state.forEach((i) => {
        if (i.id === item.id) i.quantity += 1;
      });
    } else {
      state.push(item);
    }
  },

  decrease: (state, action) => {
    const item = state.find((i) => i.id === action.payload);

    if (item.quantity > 1) {
      state.forEach((i) => {
        if (i.id === item.id) i.quantity -= 1;
      });
    }
  },

  removecart: (state, action) => {
    return state.filter((item) => item.id !== action.payload);
  },

   emptycart:(state)=>{
  return   state = [
       
     ]
      
     
   }
  
});
