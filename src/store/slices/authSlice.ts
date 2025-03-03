import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  language_code: string;
  allows_write_to_pm: boolean;
  photo_url: string;
}

interface AuthState {
  initData: string | null;
  userInfo: UserInfo | null;
  token: string | null;
}

const initialState: AuthState = {
  initData: null,
  userInfo: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{
        initData: string;
        userInfo: UserInfo;
        token: string;
      }>
    ) => {
      state.initData = action.payload.initData;
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
    },
    clearAuthData: (state) => {
      state.initData = null;
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
