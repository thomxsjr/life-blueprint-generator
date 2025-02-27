import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentUserMetrics: null,
}

const userMetricsSlice = createSlice({
    name: 'userMetrics',
    initialState,
    reducers: {
        adduserMetrics: (state, action) => {
            state.currentUser = action.payload
        },
        updateuserMetrics: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { adduserMetrics, updateuserMetrics } = userMetricsSlice.actions
export default userMetricsSlice.reducer