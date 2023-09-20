import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerVedio:null
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies(state,action){
            state.PopularMovies=action.payload
        },
        addtrailerVedio(state,action){
            state.trailerVedio=action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addtrailerVedio} = moviesSlice.actions
export default moviesSlice.reducer