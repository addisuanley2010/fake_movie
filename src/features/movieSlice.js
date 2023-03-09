import { createSlice } from "@reduxjs/toolkit";

const initialState={
        movie:[]
}


const movieSlice=createSlice({
        name: "movie",
        initialState,
        reducers:{
                getMovie:(state,action)=>{
                  state.movie=action.payload
                }
        }
})

export const { getMovie } = movieSlice.actions

export default movieSlice.reducer
