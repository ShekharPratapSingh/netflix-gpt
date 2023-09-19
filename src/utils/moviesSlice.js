import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies=action.payload
        },
        addtrailerVedio(state,action){
            state.trailerVedio=action.payload
        }
    }
})

export const {addNowPlayingMovies,addtrailerVedio} = moviesSlice.actions
export default moviesSlice.reducer