import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from '../common/api/apiKey'
import movieApi from '../common/api/movieApi'
const initialState = {
        movie: [],
        show:[]
}
const movieText = "harry"

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async () => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => { console.log("error", err) })

        return response.data
})



export const fetchSeries = createAsyncThunk('movie/fetchSeries', async () => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`).catch((err) => { console.log("error", err) })

        return response.data
})




const movieSlice = createSlice({
        name: "movie",
        initialState,
      
        extraReducers: (builder) => {
                builder.addCase(fetchMovie.pending, (state, action) => {
                        console.log("pending")
                })
                builder.addCase(fetchMovie.fulfilled, (state, action) => {
                        console.log("fullfiled")
                        state.movie = action.payload

                })
                 builder.addCase(fetchSeries.fulfilled, (state, action) => {
                        console.log(" show fullfiled")
                        state.show = action.payload
                        

                })
                builder.addCase(fetchMovie.rejected,(state,action)=>{
                        console.log("error")
                })
        }
})

export default movieSlice.reducer
