import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits },
 reducers: {
    tuitLikeToggle(state, action) {
        const tuit = state.tuits.find(tuit => tuit._id === action.payload._id)
        tuit.likes = tuit.liked ? tuit.likes - 1 : tuit.likes + 1
        tuit.liked = !tuit.liked
    },
    createTuit(state, action) {
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      },
      deleteTuit(state, action) {
        const index = state.tuits
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.tuits.splice(index, 1);
      }
 }
});

export default tuitsSlice.reducer;
export const { tuitLikeToggle, createTuit, deleteTuit } = tuitsSlice.actions