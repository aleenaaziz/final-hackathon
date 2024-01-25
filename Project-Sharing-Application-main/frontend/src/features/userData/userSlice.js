import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "./userService";

const initialState = {
  userLogin:{},
  usersProject:[],
  checkUpdate: false,
  isLoading: false,
  isSuccess: false,
  isReject: false,
  message: "",
};

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async (data, thunkAPI) => {
//     try {
//       const response = await login(data);
//       console.log(thunkAPI.fulfillWithValue(response));
//       return thunkAPI.fulfillWithValue(response);
//     } catch (err) {
//       console.log(thunkAPI.rejectWithValue(err.message));
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const signUpUser = createAsyncThunk(
//   "user/signUp",
//   async (data, thunkAPI) => {
//     try {
//       const response = await getData();
//       return thunkAPI.fulfillWithValue(response);
//     } catch (err) {
//       console.log(thunkAPI.rejectWithValue(err.message));
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
export const loginSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    reset: () => initialState,
    loginUser: (state, action) => {
      state.userLogin = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addMyForm.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(addMyForm.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.message = action.payload;
  //     })
  //     .addCase(addMyForm.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.message = action.payload;
  //     })
  // },
});

export const { reset, loginUser } = loginSlice.actions;

export default loginSlice.reducer;
