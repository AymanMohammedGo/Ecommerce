import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  FavoriteItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  totalQuantityFavorite: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    addToolItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = [];
      state.totalQuantity++;
      if (newItem.count === "1") {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: Number(newItem.count),
          totalPrice: Number(newItem.count) * Number(newItem.price),
        });
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    addFavoriteItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.FavoriteItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.FavoriteItems.push({
          id: newItem.id,
          productName: newItem.productName,
          shortDesc: newItem.shortDesc,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          category: newItem.category,
        });
        state.totalQuantityFavorite++;
        toast.success("تم اضافة الى المفضلة بنجاح");
      } else {
        state.FavoriteItems = state.FavoriteItems.filter(
          (item) => item.id !== newItem.id
        );
        state.totalQuantityFavorite--;
        toast.error("تم الحذف من المفضلة بنجاح");
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteAll: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
