import { createSlice } from "@reduxjs/toolkit";
import data from "../data/dashboardData.json";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    categories: data.categories,
    searchQuery: "",
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push({ id: Date.now(), ...widget });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;
