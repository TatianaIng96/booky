import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productsSlice from "./products/productsSlice";
import alertsSlice from "./alerts/alertsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    alerts: alertsSlice,
  },
});

export default store;
