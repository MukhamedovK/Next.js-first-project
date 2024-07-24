import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice"
import productReducer from "./features/productSlice"


export const store = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      products: productReducer
    }
  })
}
