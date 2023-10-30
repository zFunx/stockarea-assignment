import { createSlice } from "@reduxjs/toolkit";
import warehouses from "@/assets/warehouseData.json";

const minSpaceAvailable = Math.min(
  ...warehouses.map((warehouse) => warehouse.space_available)
);
const initialState = {
  warehouses,
  filteredWarehouses: warehouses,
  filter: {
    query: "", // contains search terms
    cities: [],
    clusters: [],
    minSpaceAvailable,
  },
  cities: [...new Set(warehouses.map((warehouse) => warehouse.city))],
  clusters: [...new Set(warehouses.map((warehouse) => warehouse.cluster))],
  minSpaceAvailable,
  maxSpaceAvailable: Math.max(
    ...warehouses.map((warehouse) => warehouse.space_available)
  ),
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
    filteredWarehouses = filteredWarehouses.filter((warehouse) =>
      state.filter.cities.includes(warehouse.city)
    );
  }

  // Filter by clusters
  if (state.filter.clusters.length > 0) {
    filteredWarehouses = filteredWarehouses.filter((warehouse) =>
      state.filter.clusters.includes(warehouse.cluster)
    );
  }

  // Filter by space available
  filteredWarehouses = filteredWarehouses.filter(
    (warehouse) => warehouse.space_available > state.filter.minSpaceAvailable
  );

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
    setFilterMinSpaceAvailabe: (state, action) => {
      state.filter.minSpaceAvailable = action.payload;
      applyFilter(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setQuery,
  setFilterCities,
  setFilterClusters,
  setFilterMinSpaceAvailabe,
} = warehouseSlice.actions;

export default warehouseSlice.reducer;
