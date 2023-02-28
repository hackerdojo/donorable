import { configureStore } from '@reduxjs/toolkit'
import principalReducer from '../features/principal/principalSlice'
import cardDeckReducer from '../features/cardDeckSlice/cardDeckSlice';

export default configureStore({
  reducer: {
    principal: principalReducer,
    cardDeck: cardDeckReducer
    // will need an organization reducer to hold all orgs that have been favorited, liked, disliked?
    // if the filter changes, and the cardDeck is smaller, how do we see the details?
    // can cache and pull I suppose if not in cache.
  },
})



