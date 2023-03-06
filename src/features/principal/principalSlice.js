import { createSlice } from '@reduxjs/toolkit'
import firebase from '../../firebase/config';

/* Read https://redux-toolkit.js.org/usage/immer-reducers to understand how to change state here. */

const gcpUpdateUser =  (state, updateFields) => {
  const userRef = firebase.doc(firebase.db, "users", state.id);
  firebase.updateDoc(userRef, updateFields)
    .then( (response) => {

      }
    ).catch(error => {
    console.log(error)
  }
  )
}

const initialState = {
  status: "checking",
  id:"",
  email:"",
  firstname :"",
  middlename: "",
  lastname:"",
  phone:"",
  registered:"",
  registeredAs:"",
  enteredLocation:"",
  isAdmin: false,
  searchFilter:[],
  liked: [],
  disliked:[],
  favorites:[],
  donateAnonymously:false
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

    updateProfile: (state, action) => {
      const profile = action.payload;
      gcpUpdateUser(state,profile);
      Object.keys(profile).map( key => state[key] = profile[key]);
    },

    addLiked: (state,action) => {
      const itemId = action.payload;
      const liked =  [...(state.liked.filter(item => item !== itemId)), itemId];
      state.liked =  liked;
      const disliked =  [...(state.disliked.filter(item => item !== itemId))];
      state.disliked = disliked;
      gcpUpdateUser(state,{liked,disliked});
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
      const liked = [...(state.liked.filter(item => item !== itemId))];
      state.liked =  liked;
      gcpUpdateUser(state,{liked,disliked});
    },

    removeDisliked: (state,action) => {
      const itemId = action.payload;
      const disliked = [...(state.disliked.filter(item => item !== itemId)), itemId];
      state.disliked =  disliked;
      gcpUpdateUser(state,{disliked});
    },

    addFavorite: (state, action) => {
      const itemId = action.payload;
      const favorites = [...(state.favorites.filter(item => item !== itemId)), itemId];
      state.favorites =  favorites;
      gcpUpdateUser(state,{favorites});
    },

    removeFavorite: (state,action)=> {
      const itemId = action.payload;
      const favorites = state.favorites =  [...(state.favorites.filter(item => item !== itemId))];
      state.favorites =  favorites;
      gcpUpdateUser(state,{favorites});
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
  updateProfile
} = principalSlice.actions

export default principalSlice.reducer
