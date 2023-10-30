import { createSlice } from "@reduxjs/toolkit";
import warehouses from "@/assets/warehouseData.json";

const initialState = {
  filteredWarehouses: warehouses,
  filter: {
    query: "", // contains search terms
  },
};

const applyFilter = (state) => {
  if (state.filter.query) {
    state.filteredWarehouses = warehouses.filter((warehouse) => {
      if (warehouse.name.toLowerCase().includes(state.filter.query)) {
        return true;
      }
      return false;
    });
  } else {
    state.filteredWarehouses = warehouses;
  }
};

export const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.filter.query = action.payload.toLowerCase();
      applyFilter(state);
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
export const { setQuery } = warehouseSlice.actions;

export default warehouseSlice.reducer;
