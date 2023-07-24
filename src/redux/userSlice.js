import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //name, email - put into obj USER
    //another two fields added - pending, error
    userInfo: { name: "SubhaRanjan", email: "subha@gmail.com" },
    pending: false,
    error: false,
  },

  reducers: {
    // another set of reducer functions
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
