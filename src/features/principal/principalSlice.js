import { createSlice } from '@reduxjs/toolkit'
import firebase from '../../firebase/config';

/* Read https://redux-toolkit.js.org/usage/immer-reducers to understand how to change state here. */

import {data} from "../../mockdata/data";
import {useState} from "react";
import {useSelector} from "react-redux";

const gcpUpdateUser =  (state, updateFields) => {

  const userRef = firebase.doc(firebase.db, "users", state.id);
  firebase.updateDoc(userRef, updateFields)
    .then( (response) => {

      }
    );
}

const initialState = {
  status: "checking",
    id:"",
    email:"",
    firstname :"",
    lastname:"",
    phone:"",
    registered:"",
    registeredAs:"",
    enteredLocation:"",
    isAdmin: false,
    searchFilter:[],
    liked: [],
    disliked:[],
    favorites:[]
}

export const principalSlice = createSlice({
  name: 'principal',
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      return action.payload;
    },

    nullUserToStart: () => {
      return initialState;
    },

    updateUserSettings: (state, action) => {
      const userSettings = action.payload;
      gcpUpdateUser(state,userSettings);
      return {...state, ...userSettings };
    },

    addLiked: (state,action) => {
      const itemId = action.payload;
      const liked =  [...(state.liked.filter(item => item !== itemId)), itemId];
      state.liked =  liked;
      gcpUpdateUser(state,{liked});
    },

    removeLiked: (state,action) => {
      const itemId = action.payload;
      const liked = [...(state.liked.filter(item => item !== itemId))];
      state.liked =  liked;
      gcpUpdateUser(state,{liked});
    },

    addDisliked: (state,action) => {
      const itemId = action.payload;
      const disliked = [...(state.disliked.filter(item => item !== itemId)), itemId];
      state.disliked =  disliked;
      gcpUpdateUser(state,{disliked});
    },

    removeDisliked: (state,action) => {
      const itemId = action.payload;
      const disliked = [...(state.disliked.filter(item => item !== itemId)), itemId];
      state.disliked =  disliked;
      gcpUpdateUser(state,{disliked});
    },

    addFavorite: (state) => {
      const itemId = action.payload;
      const favorite = [...(state.favorite.filter(item => item !== itemId)), itemId];
      state.favorite =  favorite;
      gcpUpdateUser(state,{favorite});
    },

    removeFavorite: (state)=> {
      const itemId = action.payload;
      const favorite = state.favorite =  [...(state.favorite.filter(item => item !== itemId))];
      state.favorite =  favorite;
      gcpUpdateUser(state,{favorite});
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addLiked,
  removeLiked,
  addDisliked,
  removeDisliked,
  addFavorite,
  removeFavorite,
  nullUserToStart,
  login,
  updateUserSettings
} = principalSlice.actions

export default principalSlice.reducer
