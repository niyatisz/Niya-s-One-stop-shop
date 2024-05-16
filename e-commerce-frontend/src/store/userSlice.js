import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) =>{
      console.log(action.payload)
      state.user = action.payload
      console.log('action.payload: ', action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer