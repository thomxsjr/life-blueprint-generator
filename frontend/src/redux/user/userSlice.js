import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUserSuccess: (state, action) => {
            state.currentUser = action.payload
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null
        }
    }
})

export const { signInUserSuccess, signOutUserSuccess } = userSlice.actions
export default userSlice.reducer