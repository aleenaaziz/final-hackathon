import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/userData/userSlice'

export const store = configureStore({
  reducer: {
    userData: formReducer,
  },
})