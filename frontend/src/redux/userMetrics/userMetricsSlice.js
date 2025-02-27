// userMetricsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUserMetrics: null,
};

const userMetricsSlice = createSlice({
  name: 'userMetrics',
  initialState,
  reducers: {

    setUserMetrics: (state, action) => {
      state.currentUserMetrics = action.payload;
    },

    clearUserMetrics: (state) => {
      state.currentUserMetrics = null;
    },
  },
});

export const { setUserMetrics, clearUserMetrics } = userMetricsSlice.actions;
export default userMetricsSlice.reducer;
