import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from '../common/api/apiKey'
import axios from "axios";
// import axios from '../common/api/axios'
const initialState = {
        movie: [],
        show:[],
        singleShow:[]
}
const movieText = "harry"

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async () => {
        const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => { console.log("error", err) })

        return response.data
})



export const fetchSeries = createAsyncThunk('movie/fetchSeries', async () => {
        const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&s=${movieText}&type=series`).catch((err) => { console.log("error", err) })

        return response.data
})



export const fetchSingleMovie = createAsyncThunk('movie/fetchSingleMovie', async (id) => {
        const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKey}&i=${id}&Plot=full`).catch((err) => { console.log("error", err) })

        return response.data
})



const movieSlice = createSlice({
        name: "movie",
        initialState,
        reducers:{
         removeFetchSingleMovie:(state,action)=>{
                state.singleShow=[]
         }
        },
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
                 builder.addCase(fetchSingleMovie.fulfilled, (state, action) => {
                        state.singleShow = action.payload
                        
                        console.log(action.payload)

                })
                builder.addCase(fetchSingleMovie.rejected,(state,action)=>{
                        console.log("error happened sorry")
                })
               
        }
})

export const {removeFetchSingleMovie} =movieSlice.actions
export default movieSlice.reducer
