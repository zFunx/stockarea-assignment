import { createSlice } from "@reduxjs/toolkit";
import warehouses from "@/assets/warehouseData.json";

const initialState = {
  filteredWarehouses: [...warehouses],
  filter: {
    query: "" // contains search terms
  }
};

export const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    findByName: (state, action) => {
      //   Todo
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  warehouseSlice.actions;

export default warehouseSlice.reducer;
