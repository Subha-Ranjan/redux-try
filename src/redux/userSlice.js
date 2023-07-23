import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "SubhaRanjan",
    email: "subha@gmail.com",
  },
  // action.payload ==> NEW 'username / email'
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    //one more reducer - remove
    remove: (state) => {
      state = {};
    },
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
