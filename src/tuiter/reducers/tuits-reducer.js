import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Tesla",
    "handle": "@tesla",
    "image": "data:image/png;base64,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",
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