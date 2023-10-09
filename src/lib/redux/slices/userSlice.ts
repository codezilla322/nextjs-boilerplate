import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = { email: "", loggedIn: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      return { email: action.payload, loggedIn: true };
    },
    logoutUser: (state) => {
      return initialState;
    },
  },
});
