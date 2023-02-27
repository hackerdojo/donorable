import { configureStore } from '@reduxjs/toolkit'
import principalReducer from '../features/principal/principalSlice'
import cardDeckReducer from '../features/cardDeckSlice/cardDeckSlice';

export default configureStore({
  reducer: {
    principal: principalReducer,
    cardDeck: cardDeckReducer
  },
})



