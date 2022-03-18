import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

const initialState: UserState = {
  id: 0,
  username: "",
  email: "",
  provider: "",
  confirmed: false,
  blocked: true,
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.confirmed = action.payload.confirmed;
      state.blocked = action.payload.blocked;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
  },
});

export const { setUser } = userSlice.actions;

const { reducer } = userSlice;
export default reducer;