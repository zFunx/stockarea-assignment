import { createSlice } from "@reduxjs/toolkit";
import warehouses from "@/assets/warehouseData.json";

const initialState = {
  warehouses,
  filteredWarehouses: warehouses,
  filter: {
    query: "", // contains search terms
    cities: [],
    clusters: [],
  },
  cities: [...new Set(warehouses.map((warehouse) => warehouse.city))],
  clusters: [...new Set(warehouses.map((warehouse) => warehouse.cluster))],
};

const applyFilter = (state) => {
  let filteredWarehouses = [...state.warehouses];

  // Filter by name
  if (state.filter.query) {
    filteredWarehouses = filteredWarehouses.filter((warehouse) => {
      if (warehouse.name.toLowerCase().includes(state.filter.query)) {
        return true;
      }
      return false;
    });
  }

  // Filter by cities
  if (state.filter.cities.length > 0) {
    filteredWarehouses = filteredWarehouses.filter((warehouse) => {
      if (state.filter.cities.includes(warehouse.city)) {
        return true;
      }
      return false;
    });
  }
  
  // Filter by clusters
  if (state.filter.clusters.length > 0) {
    filteredWarehouses = filteredWarehouses.filter((warehouse) => {
      if (state.filter.clusters.includes(warehouse.cluster)) {
        return true;
      }
      return false;
    });
  }

  state.filteredWarehouses = filteredWarehouses;
};

export const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.filter.query = action.payload.toLowerCase();
      applyFilter(state);
    },
    setFilterCities: (state, action) => {
      state.filter.cities = action.payload;
      applyFilter(state);
    },
    setFilterClusters: (state, action) => {
      state.filter.clusters = action.payload;
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
export const { setQuery, setFilterCities, setFilterClusters } = warehouseSlice.actions;

export default warehouseSlice.reducer;
