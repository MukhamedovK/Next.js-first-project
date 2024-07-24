import { createSlice } from "@reduxjs/toolkit";

// FOR SSR
// const getInitialTheme = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("theme") || "light";
//   }
//   return "light";
// };

const initialTheme = localStorage.getItem('theme') || 'light'

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", state.theme);
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
