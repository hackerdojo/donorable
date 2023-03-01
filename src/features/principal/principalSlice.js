import { createSlice } from '@reduxjs/toolkit'
import firebase from '../../firebase/config';

/* Read https://redux-toolkit.js.org/usage/immer-reducers to understand how to change state here. */

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
    favorites:[],
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
      state.firstname = userSettings.firstname;
      state.lastname = userSettings.lastname;
      state.phone = userSettings.phone;
      state.enteredLocation = userSettings.enteredLocation;
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
