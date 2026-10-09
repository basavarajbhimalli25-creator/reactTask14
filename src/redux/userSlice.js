import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        ...action.payload,
        id: Date.now(),
      });
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, clearUsers } = userSlice.actions;

export default userSlice.reducer;