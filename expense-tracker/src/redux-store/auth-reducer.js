import { createSlice } from "@reduxjs/toolkit";

const initialIdToken = localStorage.getItem("idToken");
const initialEmail = localStorage.getItem("email");
const initialAuthState = {
  idToken: initialIdToken,
  email: initialEmail,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.idToken = action.payload.idToken;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      localStorage.setItem("idToken", state.idToken);
      localStorage.setItem("email", state.email);
    },
    logout(state) {
      state.idToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("idToken");
      localStorage.removeItem("email");
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
