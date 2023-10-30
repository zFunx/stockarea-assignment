import { configureStore } from '@reduxjs/toolkit'
import warehouseReducer from '@/store/warehouseSlice'

export const store = configureStore({
  reducer: {
    warehouse: warehouseReducer
  },
})