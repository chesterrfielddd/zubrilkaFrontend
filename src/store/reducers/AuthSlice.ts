import { createSlice } from "@reduxjs/toolkit/react";

export interface IAuth {
  name: string,
  token: string,
}

const initialState: IAuth = {
  name: '',
  token: '',
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: 
});